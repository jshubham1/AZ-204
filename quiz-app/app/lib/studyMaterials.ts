// Auto-generated study materials from markdown files
// Generated on: 2025-09-18T15:21:38.852Z
// Total materials: 23

import type { StudyMaterial } from '~/types/StudyMaterial';

export const studyMaterials: StudyMaterial[] = [
  {
    "id": "api-management",
    "topic": "api-management",
    "title": "Azure API Management",
    "description": "Comprehensive guide to Azure API Management in Microsoft Azure platform",
    "difficulty": "Beginner",
    "estimatedReadTime": 49,
    "tags": [
      "API Management",
      "Key vault",
      "key vault",
      "Key Vault",
      "event hub",
      "Application Insights"
    ],
    "learningObjectives": [
      "Developer Tier: Like Premium, without multi-region deployment and availability zones.",
      "Basic Tier: No Entra ID integration, and workspaces.",
      "Standard Tier: Has Entra ID Integration and workspaces.",
      "Secret: Literal string or policy expression that is encrypted by API Management",
      "Configure a JWT validation policy to pre-authorize requests (`validate-jwt`)"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Experience with REST APIs and HTTP protocols",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Tiers",
        "content": "<ul>\n<li><strong>Consumption Tier</strong>: No Entra ID integration, private endpoint support for inbound connections, developer portal, built-in cache, built-in analytics, backup and restore, management over Git, direct management API, Azure Monitor and Log Analytics request logs, Static IP.</li>\n<li><strong>Developer Tier</strong>: Like Premium, without multi-region deployment and availability zones.</li>\n<li><strong>Basic Tier</strong>: No Entra ID integration, and workspaces.</li>\n<li><strong>Standard Tier</strong>: Has Entra ID Integration and workspaces.</li>\n<li><strong>Premium Tier</strong>: Has VNET, multiple custom domain names, self-hosted gateway</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Components",
        "content": "<ul>\n<li><strong>API Gateway</strong>: Endpoint that routes API calls, verifies credentials, enforces quotas and limits, transforms requests/responses specified in policy statements, caches responses, and produces logs/metrics for monitoring.</li>\n<li><strong>Management Plane</strong>: Administrative interface for service settings, define and import API schema, packaging APIs into products, policy setup, analytics, and user management.</li>\n<li><strong>Developer Portal</strong>: Auto-generated website for API documentation that enables developers to access API details, use interactive consoles, create an account and subscribe for API keys, analyze usage, download API definitions, and manage API keys.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Products",
        "content": "<p>Products bundle APIs for developers. They have a title, description, and usage terms. They can be <strong>Open</strong> (usable without subscription) or <strong>Protected</strong> (requires subscription). Subscription approval is either auto-approved or needs admin approval.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Groups",
        "content": "<p>Groups control product visibility to developers. API Management has three unchangeable system groups:</p>\n\n<ul>\n<li><strong>Administrators</strong>: Manage service instances, APIs, operations, and products. Azure subscription admins are in this group.</li>\n<li><strong>Developers</strong>: Authenticated portal users can build apps using your APIs. They access the Developer portal to use API operations and can be created by admins, invited, or self-registered. They belong to multiple groups and can subscribe to group-visible products.</li>\n<li><strong>Guests</strong>: Unauthenticated portal users with potential read-only access, such as viewing APIs but not calling them.</li>\n</ul>\n\n<p>Apart from system groups, admins can form custom groups or use external groups from related Microsoft Entra ID tenants.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "API Gateways",
        "content": "<p>API gateways, such as Azure's API Management gateway, manage communication between clients and multiple front- and back-end services, which eliminates the need for clients to know specific endpoints (think of gateways as _reverse proxy_). These gateways streamline service integration, particularly when services are updated or introduced. They also take care of tasks like SSL termination, authentication, and rate limiting. Azure's API Management gateway specifically proxies API requests, enforces policies, and gathers telemetry data.</p>\n\n<ul>\n<li><strong>Managed</strong> gateways are default components deployed in Azure for each API Management instance. They handle all API traffic, regardless of where the APIs are hosted.</li>\n<li><strong>Self-hosted</strong> gateways are optional, containerized versions of managed gateways. They are suited for hybrid and multicloud environments, allowing management of on-premises APIs and APIs across multiple clouds from a single Azure API Management service.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Policies overview",
        "content": "<p>A set of statements executed sequentially on an API's request or response. They can be applied at different scopes:</p>\n\n<ul>\n<li><strong>Global Scope</strong>: Apply organization-wide policies that affect every API and operation. Ideal for enforcing security measures like IP filtering or logging across all APIs.</li>\n<li><strong>Workspace Scope</strong>: Target APIs within a specific workspace. Best for internal organization, separating APIs based on teams or departments.</li>\n<li><strong>Product Scope</strong>: Group multiple APIs under a single product to simplify the subscription process. Best for external organization, grouping APIs based on functionality or business logic.</li>\n<li><strong>API Scope</strong>: Apply policies that affect all operations within a specific API. Useful for API-specific transformations or validations.</li>\n<li><strong>Operation Scope</strong>: Fine-grained control over individual API operations. Ideal for operation-specific validations or transformations.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Types of policies",
        "content": "<ul>\n<li><strong>Inbound</strong>: Applied before routing to the backend. Examples: validation, authentication, rate limiting, request transformation.</li>\n<li><strong>Backend</strong>: Applied before the request reaches the backend. Examples: URL rewriting, setting headers.</li>\n<li><strong>Outbound</strong>: Applied to the response before sent to the client. Examples: response transformation, caching, adding headers.</li>\n</ul>\n\n<p>Note: If client expects response in certain format (example: XML), check question to see what kind of endpoint is used (example: JSON). If they are different, transform policy should be applied (example: <code>json-to-xml-policy</code>)</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Policy Configuration",
        "content": "<code><base /></code>: execute the default policies that are defined at other scopes (e.g., the Product or Global scope). Provides the ability to enforce policy evaluation order.\n<p><pre><code class=\"language-xml\">&lt;policies&gt;\n  &lt;inbound&gt;\n    &lt;!-- statements to be applied to the request go here --&gt;\n  &lt;/inbound&gt;\n  &lt;backend&gt;\n    &lt;!-- statements to be applied before the request is forwarded to\n         the backend service go here --&gt;\n  &lt;/backend&gt;\n  &lt;outbound&gt;\n    &lt;!-- statements to be applied to the response go here --&gt;\n  &lt;/outbound&gt;\n  &lt;on-error&gt;\n    &lt;!-- statements to be applied if there is an error condition go here --&gt;\n  &lt;/on-error&gt;\n&lt;/policies&gt;</code></pre></p>\n<strong>All times are in seconds!</strong>\n<strong>All sizes are in KB!</strong>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Named values",
        "content": "<p>Add a named value: <code>Dashboard > API Management Services > service > Named values</code></p>\n\n<strong>Types:</strong>\n\n<ul>\n<li>Plain: Literal string or policy expression</li>\n<li>Secret: Literal string or policy expression that is encrypted by API Management</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-properties\" target=\"_blank\" rel=\"noopener noreferrer\">Key vault</a>: Identifier of a secret stored in an Azure key vault. After update in the key vault, a named value in API Management is updated within 4 hours. Requires managed identity. Configure either a _key vault access policy_ or _Azure RBAC access_ for an API Management managed identity. Key Vault Firewall requires _system-assigned managed identity_.</li>\n</ul>\n\n<p>Add a secret:</p>\n<p><pre><code class=\"language-sh\">az apim nv create --resource-group $resourceGroup \\\n    --display-name &quot;named_value_01&quot; --named-value-id named_value_01 \\\n    --secret true --service-name apim-hello-world --value test</code></pre></p>\n<p>To use a named value in a policy, place its display name inside a double pair of braces like <code>{{ContosoHeader}}</code>. If the value is an expression, it will be evaluated. If the value is the name of another named value - not.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Policy Expressions",
        "content": "<p>Can be used as attribute values or text values in any of the API Management policies. They can be a single C# statement enclosed in <code>@(expression)</code> or a multi-statement C# code block, enclosed in <code>@{expression}</code>, that returns a value.</p>\n\n<p>Example <code>set-body</code>:</p>\n<p><pre><code class=\"language-xml\">&lt;set-body&gt;\n  @{\n    var response = context.Response.Body.As&lt;JObject&gt;();\n    foreach (var key in new [] {&quot;minutely&quot;, &quot;hourly&quot;, &quot;daily&quot;, &quot;flags&quot;}) {\n    response.Property (key).Remove ();\n    }\n  return response.ToString();\n  }\n&lt;/set-body&gt;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Throttling",
        "content": "<p>Use <code>rate-limit-by-key</code> (limit number of requests) or <code>quota-by-key</code> (limit bandwidth and/or number of requests). Renewal period is in _seconds_, bandwidth size is in _KB_. Use <code>counter-key</code> to specify identity or IP.</p>\n\n<p>When quota is exceeded, a <code>403 Forbidden</code> status is returned.</p>\n\n<ul>\n<li>Throttle by IP: <code>counter-key=\"@(context.Request.IpAddress)\"</code></li>\n<li>Throttle by Identity: <code>counter-key=\"@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"\").AsJwt()?.Subject)\"</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Caching",
        "content": "<p>Azure APIM has built-in support for HTTP response caching using the resource URL as the key. You can modify the key using request headers with the vary-by properties.</p>\n\n<ul>\n<li>Get from cache (<code>cache-lookup</code>): inbound</li>\n<li>Store to cache (<code>cache-store</code>): outbound</li>\n<li>Others are mixed</li>\n</ul>\n\n<h4>Examples</h4>\n\n<h5>Cache by header</h5>\n<p><pre><code class=\"language-http\">https://myapi.azure-api.net/me\nAuthorization: Bearer &lt;access_token&gt;</code></pre></p>\n<p>Endpoint is not unique, but the authorization header is for each user.</p>\n<p><pre><code class=\"language-xml\">&lt;cache-lookup&gt;\n    &lt;vary-by-header&gt;Authorization&lt;/vary-by-header&gt;\n&lt;/cache-lookup&gt;</code></pre></p>\n<h5>Cache by query parameter</h5>\n<p><pre><code class=\"language-http\">https://myapi.azure-api.net/samples?topic=apim&amp;section=caching</code></pre></p>\n<p>Endpoint has two query parameters: <code>topic</code> and <code>section</code>. Use semicolon to separate.</p>\n<p><pre><code class=\"language-xml\">&lt;cache-lookup&gt;\n    &lt;vary-by-query-parameter&gt;topic;section&lt;/vary-by-query-parameter&gt;\n&lt;/cache-lookup&gt;</code></pre></p>\n<h5>Cache by url</h5>\n<p><pre><code class=\"language-http\">https://myapi.azure-api.net/items/123456</code></pre></p>\n<p>Endpoint has no parameters, but the url is unique. This time use empty string.</p>\n<p><pre><code class=\"language-xml\">&lt;cache-lookup&gt;\n    &lt;vary-by-query-parameter&gt;&lt;/vary-by-query-parameter&gt;\n&lt;/cache-lookup&gt;</code></pre></p>\n<h5>Fragment caching</h5>\n\n<p>When you want to add some information from external system to the current response, without fetching it every time. For example <code>/me/tasks</code> returns user's todos and profile, but the profile is stored at <code>/userprofile/{userid}</code>. To avoid fetching profile every time, the following rules must be implemented:</p>\n<p><pre><code class=\"language-xml\">&lt;!-- Extract userId from JWT --&gt;\n&lt;set-variable\n  name=&quot;enduserid&quot;\n  value=&quot;@(context.Request.Headers.GetValueOrDefault(&quot;Authorization&quot;,&quot;&quot;).Split(&#39; &#39;)[1].AsJwt()?.Subject)&quot; /&gt;\n\n&lt;!-- Data is supposed to be stored in userprofile (for example) --&gt;\n&lt;!-- If userprofile is not cached yet, send a request and store the response in cache --&gt;\n&lt;choose&gt;\n    &lt;when condition=&quot;@(!context.Variables.ContainsKey(&quot;userprofile&quot;))&quot;&gt;\n        &lt;!-- Make an HTTP request to /userprofile/{userid} in order to retrieve it  --&gt;\n        &lt;send-request params&gt;options&lt;/send-request&gt;\n\n        &lt;!-- Store to cache --&gt;\n        &lt;cache-store-value\n          key=&quot;@(&quot;userprofile-&quot; + context.Variables[&quot;enduserid&quot;])&quot;\n          value=&quot;@(((IResponse)context.Variables[&quot;userprofileresponse&quot;]).Body.As&lt;string&gt;())&quot; duration=&quot;100000&quot; /&gt;\n    &lt;/when&gt;\n&lt;/choose&gt;\n\n&lt;!-- Use userprofile from cache --&gt;\n&lt;cache-lookup-value\n  key=&quot;@(&quot;userprofile-&quot; + context.Variables[&quot;enduserid&quot;])&quot;\n  variable-name=&quot;userprofile&quot; /&gt;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-13",
        "title": "Via Entra ID",
        "content": "<ol>\n<li>Register an application in Entra ID to represent the API</li>\n<li>Configure a JWT validation policy to pre-authorize requests (<code>validate-jwt</code>)</li>\n</ol>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Managed Identities",
        "content": "<p>Use the <code>authentication-managed-identity</code> policy to authenticate with a service through managed identity. It gets an access token from Microsoft Entra ID and sets it in the <code>Authorization</code> header using the Bearer scheme. The token is cached until it expires. If no client-id is given, the system-assigned identity is used.</p>\n\n<p>Example: <code><authentication-managed-identity resource=\"resource\" client-id=\"clientid of user-assigned identity\" output-token-variable-name=\"token-variable\" ignore-error=\"true|false\"/></code>, where resource could be <code><a href=\"https://graph.microsoft.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com</a></code>, <code><a href=\"https://management.azure.com/\" target=\"_blank\" rel=\"noopener noreferrer\">https://management.azure.com/</a></code>, etc.</p>\n\n<p>Use cases:</p>\n\n<ul>\n<li>Obtain a custom TLS/SSL certificate for the API Management instance from Azure Key Vault</li>\n<li>Store and manage named values from Azure Key Vault</li>\n<li>Authenticate to a backend by using a user-assigned identity</li>\n<li>Log events to an event hub</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Via Subscriptions",
        "content": "<p>API Management lets you secure APIs using subscription keys. Developers have to include these keys in HTTP requests when accessing APIs. If not, API Management gateway rejects the requests. The subscription keys come from subscriptions, which developers can get without needing permission from API publishers. Apart from this, OAuth2.0, Client certificates, and IP allow listing are other security methods.</p>\n\n<h4>Subscription Keys</h4>\n\n<p>A subscription key is a unique, automatically generated key included in client request headers or as a query string parameter. It's tied to a subscription which can have different scopes providing varied access levels. Subscriptions let you control permissions and policies minutely.</p>\n\n<p>Three main subscription scopes:</p>\n\n<ul>\n<li><strong>All APIs</strong>: Grants access to all APIs configured in the service.</li>\n<li><strong>Single API</strong>: Access control limited to a specific API and its endpoints.</li>\n<li><strong>Product</strong>: Applies to a particular product (a collection of APIs) in API Management, each with different access rules, usage quotas, and terms of use.</li>\n</ul>\n\n<p>Keys need to be included in every request to a protected API. They can be regenerated if needed, such as if a key is leaked. Subscriptions have a primary and a secondary key to aid in regeneration without downtime. In products with enabled subscriptions, clients must provide a key when calling APIs. They can get a key via a subscription request.</p>\n\n<h5>Calling API with Subscription Key</h5>\n\n<p>API calls need a valid key in HTTP requests. This can be passed in the request header or as a query string. The default header name is <strong>Ocp-Apim-Subscription-Key</strong>, and the default query string is <strong>subscription-key</strong>. APIs can be tested using the developer portal or command-line tools like curl. Here are example curl commands using a header and a URL query string:</p>\n<p><pre><code class=\"language-sh\">curl --header &quot;Ocp-Apim-Subscription-Key: &lt;key string&gt;&quot; https://&lt;apim gateway&gt;.azure-api.net/api/path</code></pre></p>\n<p><pre><code class=\"language-sh\">curl https://&lt;apim gateway&gt;.azure-api.net/api/path?subscription-key=&lt;key string&gt;</code></pre></p>\n<p>Failure to pass the key results in a <strong>401 Access Denied</strong> response.</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-16",
        "title": "API Security with Certificates",
        "content": "<ul>\n<li><code>authentication-certificate</code>: Used by APIM to authenticate itself to the backend service.</li>\n<li><code>validate-client-certificate</code> (_inbound_): Used by APIM to validate the client's certificate connecting to the APIM.</li>\n</ul>\n\n<p>Configure access to key vault:</p>\n\n<ul>\n<li>Access policy: <code>Access Policies > + Create > Secret permissions > Permissions tab > Get and List ; Principal tab > principal > managed identity > Next > Review + create > Create</code></li>\n<li>RBAC access: <code>Access control (IAM) > Add role assignment > Role tab > Key Vault Secrets User ; Members tab > Managed identity > + Select members > identity</code></li>\n</ul>\n\n<h4>TLS Client Authentication</h4>\n\n<p>API gateways inspect client certificates for specific attributes, such as Certificate Authority (CA), Thumbprint, Subject, and Expiration Date. These can be combined for custom policies.</p>\n\n<p>Certificates are signed to avoid tampering. Validate received certificates to ensure they're authentic. Trusted CAs or physically delivered self-signed certificates are ways to confirm authenticity.</p>\n\n<p>In the _Consumption_ tier client certificates must be _manually enabled_ on the <strong>Custom domains</strong> page.</p>\n\n<h4>Check the thumbprint against certificates uploaded to API Management</h4>\n\n<p>Use <code><when condition=\"$(...)\"></code> policy with <code><return-response></code> and <code><set-status code=\"403\" reason=\"Invalid client certificate\" /></code>:</p>\n<p><pre><code class=\"language-cs\">// Client certificate\ncontext.Request.Certificate == null || context.Request.Certificate.Thumbprint != &quot;desired-thumbprint&quot;\n\n// Certificates uploaded to API Management\ncontext.Request.Certificate == null || !context.Request.Certificate.Verify() || !context.Deployment.Certificates.Any(c =&gt; c.Value.Thumbprint == context.Request.Certificate.Thumbprint)\n\n// Check the issuer and subject of a client certificate\ncontext.Request.Certificate == null || context.Request.Certificate.Issuer != &quot;trusted-issuer&quot; || context.Request.Certificate.SubjectName.Name != &quot;expected-subject-name&quot;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-17",
        "title": "Error handling",
        "content": "<ul>\n<li>Azure API Management uses a <code>ProxyError</code> object, accessed via <code>context.LastError</code>, for handling errors during request processing.</li>\n<li>Policies are divided into inbound, backend, outbound, and on-error sections. Processing jumps to the on-error section if an error occurs.</li>\n<li>If there's no on-error section, callers receive <code>400</code> or <code>500</code> HTTP response messages during an error.</li>\n<li>Predefined errors exist for built-in steps and policies, each with a source, condition, reason, and message.</li>\n<li>Custom behavior, like logging errors or creating new responses, can be configured in the on-error section.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-18",
        "title": "Versions and Revisions",
        "content": "<ul>\n<li>Use <strong>Revisions</strong> for non-breaking changes, allowing for testing and updates without affecting existing users. Users can access different revisions by using a different query string at the same endpoint.</li>\n<li>Use <strong>Versions</strong> for breaking changes, requiring publishing and potentially requiring users to update their applications.</li>\n</ul>\n\n<a href=\"https://learn.microsoft.com/en-us/azure/api-management/api-management-versions\" target=\"_blank\" rel=\"noopener noreferrer\">Versioning schemes</a>:\n\n<ul>\n<li>Path-based versioning: <code><a href=\"https://apis.contoso.com/products/v1\" target=\"_blank\" rel=\"noopener noreferrer\">https://apis.contoso.com/products/v1</a></code> and <code><a href=\"https://apis.contoso.com/products/v2\" target=\"_blank\" rel=\"noopener noreferrer\">https://apis.contoso.com/products/v2</a></code></li>\n<li>Header-based versioning: For example, custom header named <code>Api-Version,</code> and clients specify <code>v1</code> or <code>v2</code></li>\n<li>Query string-based versioning: <code><a href=\"https://apis.contoso.com/products?api-version=v1\" target=\"_blank\" rel=\"noopener noreferrer\">https://apis.contoso.com/products?api-version=v1</a></code> and <code><a href=\"https://apis.contoso.com/products?api-version=v2\" target=\"_blank\" rel=\"noopener noreferrer\">https://apis.contoso.com/products?api-version=v2</a></code></li>\n</ul>\n\n<p>_Header-based versioning_ if the _URL has to stay the same_. Revisions and other types of versioning schemas require modified URL.</p>\n\n<p>Creating separate gateways or web APIs would force users to access a different endpoint. A separate gateway provides complete isolation.</p>\n<p><pre><code class=\"language-sh\">az apim api release create --resource-group $resourceGroup \\\n    --api-id demo-conference-api --api-revision 2 --service-name apim-hello-world \\\n    --notes &#39;Testing revisions. Added new &quot;test&quot; operation.&#39;\n\naz deployment group create \\\n  --resource-group $resourceGroup \\\n  --template-file ./apis.json \\\n  --parameters apiRevision=&quot;20191206&quot; apiVersion=&quot;v1&quot; serviceName=&lt;serviceName&gt; apiVersionSetName=&lt;versionSetName&gt; apiName=&lt;apiName&gt; apiDisplayName=&lt;displayName&gt;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-19",
        "title": "Integrating backend API with APIM",
        "content": "<p>Create OpenAPI documentation for the backend API, then import it into APIM. This enables integration with APIM and allows for automatic discovery of all endpoints. APIM becomes a facade for the backend API, providing customization without altering the backend API itself.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Monitoring",
        "content": "<p>Azure API Management emits metrics every minute, providing near real-time visibility into the state and health of your APIs. The most frequently used metrics are 'Capacity' and 'Requests'. 'Capacity' helps you make decisions about upgrading/downgrading your API Management services, while 'Requests' helps you analyze API traffic.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "Working with API Management instance",
        "content": "<p>Create new APIM:</p>\n<p><pre><code class=\"language-sh\">az apim create --name MyAPIMInstance --resource-group $resourceGroup --location eastus --publisher-name &quot;My Publisher&quot; --publisher-email publisher@example.com --sku-name Developer\n# or\nNew-AzApiManagement -ResourceGroupName RESOURCE_GROUP -Name NAME -Location LOCATION -Organization ORGANIZATION -AdminEmail ADMIN_EMAIL [-Sku SKU_NAME] [-Tags TAGS]</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-22",
        "title": "Policies reference",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Example</th>\n      <th>Notes</th>\n      <th>Sections</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Check HTTP header</td>\n      <td><code><check-header name=\"header name\" failed-check-httpcode=\"code\" failed-check-error-message=\"message\" ignore-case=\"true \\</td>\n      <td>false\"></code><br>&nbsp;&nbsp;<code><value>Value1</value></code><br>&nbsp;&nbsp;<code><value>Value2</value></code><br><code></check-header></code></td>\n      <td>When multiple value elements are specified, the check is considered a success if any one of the values is a match.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Get authorization context</td>\n      <td><code><get-authorization-context</code><br>&nbsp;&nbsp;<code>provider-id=\"authorization provider id\"</code><br>&nbsp;&nbsp;<code>authorization-id=\"authorization id\"</code><br>&nbsp;&nbsp;<code>context-variable-name=\"variable name\"</code><br>&nbsp;&nbsp;<code>identity-type=\"managed \\</td>\n      <td>jwt\"</code><br>&nbsp;&nbsp;<code>identity=\"JWT bearer token\"</code><br>&nbsp;&nbsp;<code>ignore-error=\"true \\</td>\n      <td>false\" /></code></td>\n      <td><code>context-variable-name</code> is the name of the context variable to receive the Authorization object (<code>{accessToken: string, claims: Record<string, object>}</code>). Configure <code>identity-type=jwt</code> when the access policy for the authorization is assigned to a service principal. Only <code>/.default</code> app-only scopes are supported for the JWT.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Restrict caller IPs</td>\n      <td><code><ip-filter action=\"allow \\</td>\n      <td>forbid\"></code><br>&nbsp;&nbsp;<code><address>address</address></code><br>&nbsp;&nbsp;<code><address-range from=\"address\" to=\"address\" /></code><br><code></ip-filter></code></td>\n      <td>At least one <code>address</code> or <code>address-range</code> element is required.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Validate Microsoft Entra ID token</td>\n      <td><code>Simple token validation: <validate-azure-ad-token tenant-id=\"{{aad-tenant-id}}\"></code><br>&nbsp;&nbsp;<code><client-application-ids></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><application-id>{{aad-client-application-id}}</application-id></code><br>&nbsp;&nbsp;<code></client-application-ids></code><br><code></validate-azure-ad-token></code><br><code>Validate that audience and claim are correct: <validate-azure-ad-token tenant-id=\"{{aad-tenant-id}}\" output-token-variable-name=\"jwt\"></code><br>&nbsp;&nbsp;<code><client-application-ids></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><application-id>{{aad-client-application-id}}</application-id></code><br>&nbsp;&nbsp;<code></client-application-ids></code><br>&nbsp;&nbsp;<code><audiences></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><audience>@(context.Request.OriginalUrl.Host)</audience></code><br>&nbsp;&nbsp;<code></audiences></code><br>&nbsp;&nbsp;<code><required-claims></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><claim name=\"ctry\" match=\"any\"></code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code><value>US</value></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code></claim></code><br>&nbsp;&nbsp;<code></required-claims></code><br><code></validate-azure-ad-token></code></td>\n      <td>To validate a JWT that was provided by another identity provider, use the generic <code>validate-jwt</code>. You can secure the whole API with Entra ID authentication by applying the policy on the API level, or you can apply it on the API operation level and use claims for more granular control.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Validate client certificate</td>\n      <td><code><validate-client-certificate</code><br>&nbsp;&nbsp;<code>validate-revocation=\"true \\</td>\n      <td>false\"</code><br>&nbsp;&nbsp;<code>validate-trust=\"true \\</td>\n      <td>false\"</code><br>&nbsp;&nbsp;<code>validate-not-before=\"true \\</td>\n      <td>false\"</code><br>&nbsp;&nbsp;<code>validate-not-after=\"true \\</td>\n      <td>false\"</code><br>&nbsp;&nbsp;<code>ignore-error=\"true \\</td>\n      <td>false\"></code><br>&nbsp;&nbsp;<code><identities></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><identity </code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>thumbprint=\"certificate thumbprint\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>serial-number=\"certificate serial number\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>common-name=\"certificate common name\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>subject=\"certificate subject string\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>dns-name=\"certificate DNS name\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>issuer-subject=\"certificate issuer\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>issuer-thumbprint=\"certificate issuer thumbprint\"</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>issuer-certificate-id=\"certificate identifier\" /></code><br>&nbsp;&nbsp;<code></identities></code><br><code></validate-client-certificate></code></td>\n      <td><code>identities</code> is not required</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Control flow</td>\n      <td><code><choose></code><br>&nbsp;&nbsp;<code><when condition=\"Boolean expression \\</td>\n      <td>Boolean constant\"></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><!— one or more policy statements to be applied if the above condition is true  --></code><br>&nbsp;&nbsp;<code></when></code><br>&nbsp;&nbsp;<code><when condition=\"Boolean expression \\</td>\n      <td>Boolean constant\"></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><!— one or more policy statements to be applied if the above condition is true  --></code><br>&nbsp;&nbsp;<code></when></code><br>&nbsp;&nbsp;<code><otherwise></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><!— one or more policy statements to be applied if none of the above conditions are true  --></code><br>&nbsp;&nbsp;<code></otherwise></code><br><code></choose></code></td>\n      <td>The choose policy must contain at least one <code><when/></code> element. The <code><otherwise/></code> element is optional.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Limit concurrency</td>\n      <td><code><limit-concurrency key=\"expression\" max-count=\"number\"></code><br>&nbsp;&nbsp;<code><!— nested policy statements --></code><br><code></limit-concurrency></code></td>\n      <td>Prevents enclosed policies from executing by more than the specified number of requests at any time. When that number is exceeded, new requests will fail immediately with the <code>429 Too Many Requests</code> status. Example key: <code>key=\"@((string)context.Variables[\"connectionId\"])\"</code> code.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Rate limit</td>\n      <td><code><rate-limit-by-key calls=\"number\"</code><br>&nbsp;&nbsp;<code>counter-key=\"key value\" </code><br>&nbsp;&nbsp;<code>renewal-period=\"seconds\"</code><br><code>/></code></td>\n      <td>Renewal period is in seconds</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Quota</td>\n      <td><code><quota-by-key counter-key=\"key value\" bandwidth=\"kilobytes\" renewal-period=\"seconds\" /></code></td>\n      <td>Bandwidth is in KB, renewal period is in seconds</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Emit custom metrics</td>\n      <td><code><emit-metric name=\"name of custom metric\" value=\"value of custom metric\" namespace=\"metric namespace\"></code><br>&nbsp;&nbsp;<code><dimension name=\"dimension name\" value=\"dimension value\" /></code><br><code></emit-metric></code></td>\n      <td>Sends custom metrics in the specified format to Application Insights. You can configure at most 10 custom dimensions for this policy. Counts toward the usage limits for custom metrics per region in a subscription.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Forward request</td>\n      <td><code><forward-request http-version=\"1 \\</td>\n      <td>2or1 \\</td>\n      <td>2\" timeout=\"time in seconds\" continue-timeout=\"time in seconds\" follow-redirects=\"false \\</td>\n      <td>true\" buffer-request-body=\"false \\</td>\n      <td>true\" buffer-response=\"true \\</td>\n      <td>false\" fail-on-error-status-code=\"false \\</td>\n      <td>true\"/></code></td>\n      <td>By default, this policy is set at the global scope.</td>\n      <td>backend</td>\n    </tr>\n    <tr>\n      <td>Log to event hub</td>\n      <td><code><log-to-eventhub logger-id=\"id of the logger entity\" partition-id=\"index of the partition where messages are sent\" partition-key=\"value used for partition assignment\"></code><br><code>Expression returning a string to be logged</code><br><code></log-to-eventhub></code></td>\n      <td>The policy is not affected by Application Insights sampling. All invocations of the policy will be logged. Max message size: 200 KB (otherwise truncated).</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Mock response</td>\n      <td><code><mock-response status-code=\"code\" content-type=\"media type\"/></code></td>\n      <td>Cancels normal pipeline execution. It prioritizes response content examples, using schemas when available and generating sample responses (or no content is returned). Policy expressions can't be used in attribute values for this policy.</td>\n      <td>inbound, outbound, on-error</td>\n    </tr>\n    <tr>\n      <td>Retry</td>\n      <td><code><retry</code><br>&nbsp;&nbsp;<code>condition=\"Boolean expression or literal\"</code><br>&nbsp;&nbsp;<code>count=\"number of retry attempts\"</code><br>&nbsp;&nbsp;<code>interval=\"retry interval in seconds\"</code><br>&nbsp;&nbsp;<code>max-interval=\"maximum retry interval in seconds\"</code><br>&nbsp;&nbsp;<code>delta=\"retry interval delta in seconds\"</code><br>&nbsp;&nbsp;<code>first-fast-retry=\"boolean expression or literal\"></code><br>&nbsp;&nbsp;<code><!-- One or more child policies. No restrictions. --></code><br><code></retry></code></td>\n      <td>Executes its child policies once and then retries their execution until the <code>retry</code> condition becomes <code>false</code> or retry <code>count</code> is exhausted. When only the <code>interval</code> and <code>delta</code> are specified, the wait time between retries increases: <code>interval + (count - 1)*delta</code>.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Return response</td>\n      <td><code><return-response response-variable-name=\"existing context variable\"></code><br>&nbsp;&nbsp;<code><set-status>...</set-status></code><br>&nbsp;&nbsp;<code><set-header>...</set-header></code><br>&nbsp;&nbsp;<code><set-body>...</set-body></code><br><code></return-response></code></td>\n      <td>Pipeline cancelation, body removal, custom or default response return to caller. Context variable and policy statements modify response if both provided.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Send request</td>\n      <td><code><send-request mode=\"new \\</td>\n      <td>copy\" response-variable-name=\"\" timeout=\"seconds\" ignore-error=\"false \\</td>\n      <td>true\"></code><br>&nbsp;&nbsp;<code><set-url>request URL</set-url></code><br>&nbsp;&nbsp;<code><set-method>...</set-method></code><br>&nbsp;&nbsp;<code><set-header>...</set-header></code><br>&nbsp;&nbsp;<code><set-body>...</set-body></code><br>&nbsp;&nbsp;<code><authentication-certificate thumbprint=\"thumbprint\" /></code><br>&nbsp;&nbsp;<code><proxy>...</proxy></code><br><code></send-request></code></td>\n      <td>Default timeout: 60sec</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Set HTTP proxy</td>\n      <td><code><proxy url=\"<a href=\"http://hostname-or-ip:port\" target=\"_blank\" rel=\"noopener noreferrer\">http://hostname-or-ip:port</a>\" username=\"username\" password=\"password\" /></code></td>\n      <td>Only HTTP is supported between the gateway and the proxy. Basic and NTLM authentication only. <code>username</code> and <code>password</code> are not required.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Set request method</td>\n      <td><code><set-method>HTTP method</set-method></code></td>\n      <td>Policy expressions are allowed.</td>\n      <td>inbound, on-error</td>\n    </tr>\n    <tr>\n      <td>Set Status Code</td>\n      <td><code><set-status code=\"HTTP status code\" reason=\"description\"/></code></td>\n      <td>-</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Set Variable</td>\n      <td><code><set-variable name=\"variable name\" value=\"Expression \\</td>\n      <td>String literal\" /></code><br><code><set-variable name=\"IsMobile\" value=\"@(context.Request.Headers.GetValueOrDefault(\"User-Agent\",\"\").Contains(\"iPad\") \\</td>\n      <td>\\</td>\n      <td>context.Request.Headers.GetValueOrDefault(\"User-Agent\",\"\").Contains(\"iPhone\"))\" /></code></td>\n      <td>If the expression contains a literal it will be converted to a string</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Authenticate with Basic</td>\n      <td><code><authentication-basic username=\"username\" password=\"password\" /></code></td>\n      <td>Sets the HTTP Authorization header. Recommended using named values to provide credentials, with secrets protected in a key vault.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Authenticate with managed identity</td>\n      <td><code><authentication-managed-identity resource=\"resource\" client-id=\"clientid of user-assigned identity\" output-token-variable-name=\"token-variable\" ignore-error=\"true\\</td>\n      <td>false\"/></code><br><code><authentication-managed-identity resource=\"AD_application_id\" output-token-variable-name=\"msi-access-token\" ignore-error=\"false\" /></code><br><code><!--Application (client) ID of your own Entra ID Application--></code><br><code><set-header name=\"Authorization\" exists-action=\"override\"></code><br>&nbsp;&nbsp;<code><value>@(\"Bearer \" + (string)context.Variables[\"msi-access-token\"])</value></code><br><code></set-header></code></td>\n      <td>After successfully obtaining the token, the policy will set the value of the token in the Authorization header using the Bearer scheme. Both system-assigned identity and any of the multiple user-assigned identities can be used to request a token.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Get from cache</td>\n      <td><code><cache-lookup vary-by-developer=\"true \\</td>\n      <td>false\" vary-by-developer-groups=\"true \\</td>\n      <td>false\" caching-type=\"prefer-external \\</td>\n      <td>external \\</td>\n      <td>internal\" downstream-caching-type=\"none \\</td>\n      <td>private \\</td>\n      <td>public\" must-revalidate=\"true \\</td>\n      <td>false\" allow-private-response-caching=\"@(expression to evaluate)\"></code><br>&nbsp;&nbsp;<code><vary-by-header>Accept</vary-by-header></code><br>&nbsp;&nbsp;<code><vary-by-header>Accept-Charset</vary-by-header></code><br>&nbsp;&nbsp;<code><vary-by-header>Authorization</vary-by-header></code><br>&nbsp;&nbsp;<code><vary-by-header>header name</vary-by-header></code><br>&nbsp;&nbsp;<code><vary-by-query-parameter>parameter name</vary-by-query-parameter></code><br><code></cache-lookup></code></td>\n      <td><code>vary-by-header</code> Add one or more of these elements to start caching responses per value of specified header, such as <code>Accept</code>, <code>Accept-Charset</code>, <code>Accept-Encoding</code>, <code>Accept-Language</code>, <code>Authorization</code>, <code>Expect</code>, <code>From</code>, <code>Host</code>, <code>If-Match</code>.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Get value from cache</td>\n      <td><code><cache-lookup-value key=\"cache key value\" default-value=\"value to use if cache lookup resulted in a miss\" variable-name=\"name of a variable looked up value is assigned to\" caching-type=\"prefer-external \\</td>\n      <td>external \\</td>\n      <td>internal\" /></code></td>\n      <td><code>caching-type</code>: <code>internal</code> to use the built-in API Management cache, <code>external</code> to use Redis.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Store to cache</td>\n      <td><code><cache-store duration=\"seconds\" cache-response=\"true \\</td>\n      <td>false\" /></code></td>\n      <td>Use with <code>cache-lookup</code> in <code>inbound</code></td>\n      <td>outbound</td>\n    </tr>\n    <tr>\n      <td>Store value in cache</td>\n      <td><code><cache-store-value key=\"cache key value\" value=\"value to cache\" duration=\"seconds\" caching-type=\"prefer-external \\</td>\n      <td>external \\</td>\n      <td>internal\" /></code></td>\n      <td>The operation is asynchronous. <code>caching-type</code>: <code>internal</code> to use the built-in API Management cache, <code>external</code> to use Redis.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>CORS</td>\n      <td><code><cors allow-credentials=\"false \\</td>\n      <td>true\" terminate-unmatched-request=\"true \\</td>\n      <td>false\"></code><br>&nbsp;&nbsp;<code><allowed-origins></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><origin>origin uri</origin></code><br>&nbsp;&nbsp;<code></allowed-origins></code><br>&nbsp;&nbsp;<code><allowed-methods preflight-result-max-age=\"number of seconds\"></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><method>HTTP verb</method></code><br>&nbsp;&nbsp;<code></allowed-methods></code><br>&nbsp;&nbsp;<code><allowed-headers></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><header>header name</header></code><br>&nbsp;&nbsp;<code></allowed-headers></code><br>&nbsp;&nbsp;<code><expose-headers></code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code><header>header name</header></code><br>&nbsp;&nbsp;<code></expose-headers></code><br><code></cors></code></td>\n      <td>Configure CORS at multiple scopes. Base element at operation, API, and product. Only cors evaluated on OPTIONS preflight. Other policies on approved request. Policy can be used once.</td>\n      <td>inbound</td>\n    </tr>\n    <tr>\n      <td>Find and replace string in body</td>\n      <td><code><find-and-replace from=\"what to replace\" to=\"replacement\" /></code></td>\n      <td>Policy expressions are allowed.</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Set backend service</td>\n      <td><code><set-backend-service base-url=\"base URL of the backend service\"  backend-id=\"name of the backend entity specifying base URL of the backend service\" /></code></td>\n      <td>Redirect an incoming request to a different backend than the one specified in the API settings for that operation. Great for <code>choose</code></td>\n      <td>inbound, backend</td>\n    </tr>\n    <tr>\n      <td>Set body</td>\n      <td><code><set-body template=\"liquid\" xsi-nil=\"blank \\</td>\n      <td>null\">new body value as text</set-body></code></td>\n      <td><code>preserveContent</code> not needed when providing new body. Inbound pipeline: no response yet, so no <code>preserveContent</code>. Outbound pipeline: request already sent, so no <code>preserveContent</code>. Exception if used in inbound GET with no body.</td>\n      <td>inbound, outbound, backend</td>\n    </tr>\n    <tr>\n      <td>Set header</td>\n      <td><code><set-header name=\"header name\" exists-action=\"override \\</td>\n      <td>skip \\</td>\n      <td>append \\</td>\n      <td>delete\"><value>value</value></set-header></code></td>\n      <td>For multiple headers with the same name add additional value elements</td>\n      <td>Any</td>\n    </tr>\n    <tr>\n      <td>Rewrite URL</td>\n      <td><code><rewrite-uri template=\"/v2/US/hardware/{storenumber}&{ordernumber}?City=city&State=state\" /></code></td>\n      <td>Transform human/browser-friendly URL into the URL format expected by the web service</td>\n      <td>inbound</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 7
      }
    ],
    "relatedTopics": [
      "Application Insights",
      "Entra ID",
      "Event Hub",
      "Events"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/api-management/api-management-features",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "az-cli",
    "topic": "az-cli",
    "title": "AZ CLI",
    "description": "Comprehensive guide to AZ CLI in Microsoft Azure platform",
    "difficulty": "Intermediate",
    "estimatedReadTime": 7,
    "tags": [
      "AZ CLI",
      "App Service",
      "CLI",
      "API",
      "storage"
    ],
    "learningObjectives": [
      "`containerapp`",
      "`storage-preview`",
      "`Microsoft.App` (App Services - hosting APIs)",
      "`Microsoft.OperationsManagement`"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Prerequisites",
        "content": "<p><pre><code class=\"language-sh\"># Upgrade the Azure CLI to the latest version\naz upgrade</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Extensions",
        "content": "<p><pre><code class=\"language-sh\">az extension add --name &lt;name&gt; --upgrade</code></pre></p>\n<ul>\n<li><code>containerapp</code></li>\n<li><code>storage-preview</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Providers",
        "content": "<p><pre><code class=\"language-sh\"># Only needed on subscriptions that haven&#39;t previously used it (takes some time for changes to propagate)\naz provider register --namespace &lt;name&gt;\n\n# Check status\naz provider show --namespace &lt;name&gt; --query &quot;registrationState&quot;</code></pre></p>\n<ul>\n<li><code>Microsoft.App</code> (App Services - hosting APIs)</li>\n<li><code>Microsoft.EventGrid</code></li>\n<li><code>Microsoft.CDN</code></li>\n<li><code>Microsoft.OperationalInsights</code> (telemetry)</li>\n<li><code>Microsoft.OperationsManagement</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "App Service",
      "Azure Portal"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "app-configuration",
    "topic": "app-configuration",
    "title": "Azure App Configuration",
    "description": "Azure App Configuration centralizes app settings and feature flags, making it easier to manage hierarchical configurations across different settings and locations. It allows real-time updates witho...",
    "difficulty": "Beginner",
    "estimatedReadTime": 22,
    "tags": [
      "App Configuration",
      "Key Vault",
      "rest",
      "Api",
      "cli",
      "json"
    ],
    "learningObjectives": [
      "Values: Unicode strings optionally associated with a user-defined content type for additional metadata.",
      "Feature flag: A binary variable (on/off) that controls the execution of an associated code block.",
      "An application using feature flags.",
      "Implement `ITargetingContextAccessor`",
      "Add `TargetingFilter`: `services.AddFeatureManagement().AddFeatureFilter<TargetingFilter>();`"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Azure App Configuration centralizes app settings and feature flags, making it easier to manage hierarchical configurations across different settings and locations. It allows real-time updates without needing to restart the app. While it _encrypts all data_, it lacks the advanced security features of Azure Key Vault, such as hardware-level encryption, granular access policies, and management environments.</p>\n\n<p>You can import and export configuration between Azure App Configuration and separate files. It also supports separate stores for different development stages like testing and production.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Azure App Configuration Overview",
        "content": "<p>Azure App Configuration manages configuration data using key-value pairs.</p>\n\n<ul>\n<li><strong>Keys</strong>: Unique, _case-sensitive_ identifiers for values. They can include any unicode character except <code>*</code>, <code>,</code>, and <code>\\</code> (reserved can be escaped with '\\'). Use delimiters like <code>/</code> or <code>:</code> for hierarchical organization. Azure treats _keys as a whole_ and doesn't enforce any structure. Example: <code>AppName:Service1:ApiEndpoint</code></li>\n<li><strong>Labels</strong>: Group keys by criteria, ex: environments or versions (which is _not supported natively_). Default label is <code>null</code>. Example: <code>Key = AppName:DbEndpoint & Label = Test</code>. Key prefixes are alternative way of grouping (labeling). To explicitly reference a key-value without a label, use <code>\\0</code>. Different labels create different versions of the same key, these are considered distinct (unique) entries.</li>\n<li><strong>Values</strong>: Unicode strings optionally associated with a user-defined content type for additional metadata.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Configuration and Querying",
        "content": "<p><pre><code class=\"language-cs\">// Load configuration\nbuilder.Configuration.AddAzureAppConfiguration(options =&gt;\n{\n    options.Connect(connectionString)\n           // Select a subset of the configuration keys (start with `TestApp:` and have no label) from Azure App Configuration\n           // To select all keys: KeyFilter.Any\n           .Select(&quot;TestApp:*&quot;, LabelFilter.Null)\n           // Configure to reload configuration if the registered sentinel key is modified\n           .ConfigureRefresh(refreshOptions =&gt; refreshOptions.Register(&quot;TestApp:Settings:Sentinel&quot;, refreshAll: true));\n});\nbuilder.Services.AddFeatureManagement();\nbuilder.Services.AddFeatureFilter&lt;TargetingFilter&gt;(); // (for example)\n\n// Query keys\nAsyncPageable&lt;ConfigurationSetting&gt; settings = client.GetConfigurationSettingsAsync(new SettingSelector { KeyFilter = &quot;AppName:*&quot; });\nawait foreach (ConfigurationSetting setting in settings)\n    Console.WriteLine(__CODEBLOCK_0__quot;Key: {setting.Key}, Value: {setting.Value}&quot;);</code></pre></p>\n<h4>Chaining</h4>\n\n<p>When using multiple <code>.Select()</code>, if a key with the same name exists in both labels. the value from the last <code>.Select()</code> will be used.</p>\n<p><pre><code class=\"language-cs\">// In this example, if a key like &#39;TestApp:Key&#39; exists both with the &#39;dev&#39; label and with no label,\n// the value associated with the &#39;dev&#39; label will be used. This is due to the order of the .Select() calls.\n// If you reverse the order of the .Select() calls, the value associated with no label would take precedence.\n.Select(&quot;TestApp:*&quot;, LabelFilter.Null)\n.Select(&quot;TestApp:*&quot;, &quot;dev&quot;);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Feature Management",
        "content": "<ul>\n<li><strong>Feature flag</strong>: A binary variable (on/off) that controls the execution of an associated code block.</li>\n<li><strong>Feature manager</strong>: A software package managing feature flags' lifecycle, providing additional functions like caching and updating flag states.</li>\n<li><strong>Filter</strong>: A rule determining the state of a feature flag, based on user groups, device types, geographic location, or time windows.</li>\n</ul>\n\n<p>A successful feature management system requires:</p>\n\n<ul>\n<li>An application using feature flags.</li>\n<li>A separate repository storing feature flags and their states.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Using Feature Flags in Code",
        "content": "<p>Feature flags are used as Boolean state variables in conditional statements:</p>\n<p><pre><code class=\"language-csharp\">bool featureFlag = true; // static value\nbool featureFlag = isBetaUser(); // evaluated value\n\nif (featureFlag) { /* ... */ }\nelse { /* ... */ }</code></pre></p>\n<h4>Configure feature flags</h4>\n<p><pre><code class=\"language-cs\">// Load configuration from Azure App Configuration\nbuilder.Configuration.AddAzureAppConfiguration(options =&gt;\n{\n    // By default if no parameter is passed (options.UseFeatureFlags()), it loads all feature flags with no label\n    // The default refresh expiration of feature flags is 30 seconds\n    options.UseFeatureFlags(featureFlagOptions =&gt;\n    {\n        // Select feature flags from &quot;TestApp&quot; namespace, with label &quot;dev&quot;\n        featureFlagOptions.Select(&quot;TestApp:*&quot;, &quot;dev&quot;);\n        featureFlagOptions.CacheExpirationInterval = TimeSpan.FromMinutes(5);\n    });\n});\n\n// Add feature management to the container of services.\nbuilder.Services.AddFeatureManagement();\n// Registering a feature filter\nbuilder.Services.AddFeatureFilter&lt;TargetingFilter&gt;(); // (for example)</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Conditional feature flags",
        "content": "<p>Allows the feature flag to be enabled or disabled dynamically.</p>\n\n<ul>\n<li><code>PercentageFilter</code> enables the feature flag based on a percentage.</li>\n<li><code>TimeWindowFilter</code> enables the feature flag during a specified window of time.</li>\n<li><code>TargetingFilter</code> enables the feature flag for specified users and groups.</li>\n</ul>\n\n<h4>Enable staged rollout of features for targeted audiences with <code>TargetingFilter</code></h4>\n\n<ol>\n<li>Implement <code>ITargetingContextAccessor</code></li>\n</ol>\n\n<p><pre><code class=\"language-cs\">private const string TargetingContextLookup = &quot;TestTargetingContextAccessor.TargetingContext&quot;;\n   public ValueTask&lt;TargetingContext&gt; GetContextAsync()\n   {\n       if (httpContext.Items.TryGetValue(TargetingContextLookup, out object value))\n           return new ValueTask&lt;TargetingContext&gt;((TargetingContext)value);\n\n       // Example: `test@contoso.com` - User: `test`, Group(s): `contoso.com`\n       List&lt;string&gt; groups = new List&lt;string&gt;();\n       if (httpContext.User.Identity.Name != null)\n           groups.Add(httpContext.User.Identity.Name.Split(&quot;@&quot;, StringSplitOptions.None)[1]);\n\n       var targetingContext = new TargetingContext\n       {\n           UserId = httpContext.User.Identity.Name,\n           Groups = groups\n       };\n       httpContext.Items[TargetingContextLookup] = targetingContext;\n       return new ValueTask&lt;TargetingContext&gt;(targetingContext);\n    }</code></pre></p>\n<ol>\n<li>Add <code>TargetingFilter</code>: <code>services.AddFeatureManagement().AddFeatureFilter<TargetingFilter>();</code></li>\n</ol>\n\n<ol>\n<li>Update the <code>ConfigureServices</code> method to add the <code>ITargetingContextAccessor</code> implementation: <code>services.AddSingleton<ITargetingContextAccessor, TestTargetingContextAccessor>();</code></li>\n</ol>\n\n<ol>\n<li><code>app > Feature Manager > (create feature flag) > (enable) > Edit > Use feature filter > Targeting filte >  Override by Groups and Override by Users</code></li>\n</ol>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Declaring Feature Flags",
        "content": "<p>A feature flag consists of a name and one or more filters determining if the feature is on (<code>true</code>). When multiple filters are used, they are evaluated in order until one enables the feature. If none do, the feature is off.</p>\n\n<p>The feature manager supports _appsettings.json_ as a configuration source for feature flags:</p>\n<p><pre><code class=\"language-jsonc\">{\n  &quot;FeatureManagement&quot;: {\n    &quot;FeatureA&quot;: true, // Feature on\n    &quot;FeatureB&quot;: false, // Feature off\n    &quot;FeatureC&quot;: {\n      &quot;EnabledFor&quot;: [\n        {\n          &quot;Name&quot;: &quot;Percentage&quot;,\n          &quot;Parameters&quot;: { &quot;Value&quot;: 50 }\n        }\n      ]\n    }\n  }\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Feature Flag Repository",
        "content": "<p>Azure App Configuration serves as a centralized repository for feature flags, enabling externalizing all feature flags used in an application. This allows changing feature states without modifying and redeploying the application.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Using Customer-Managed Keys for Encryption",
        "content": "<p>A managed identity authenticates with Microsoft Entra ID and wraps the encryption key using Azure Key Vault. The wrapped key is stored and the unwrapped key is cached for an hour, then refreshed.</p>\n\n<p>Prerequisites:</p>\n\n<ul>\n<li>_A Standard tier_ Azure App Configuration</li>\n<li>Azure Key Vault with soft-delete and purge-protection</li>\n<li>An unexpired, enabled RSA or RSA-HSM key in the Key Vault with wrap and unwrap capabilities</li>\n</ul>\n\n<p>After setup, assign a managed identity to the App Configuration and grant it <code>GET</code>, <code>WRAP</code>, and <code>UNWRAP</code> (permits decrypting previously wrapped keys) permissions in the Key Vault's access policy:</p>\n<p><pre><code class=\"language-sh\">az keyvault set-policy --key-permissions get wrapKey unwrapKey</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Private endpoint",
        "content": "<ul>\n<li>Enables secure access to Azure App Configuration over a private link using an IP address from the VNet address space.</li>\n<li>Traffic stays on the Microsoft backbone network, preventing exposure to the public internet.</li>\n<li>Blocks public network access by default; can be re-enabled.</li>\n<li>Uses same connection strings/auth; no app changes needed.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Configure Key Vault",
        "content": "<p><pre><code class=\"language-cs\">builder.Configuration.AddAzureAppConfiguration(options =&gt;\n{\n    options.Connect(\n        builder.Configuration[&quot;ConnectionStrings:AppConfig&quot;])\n            .ConfigureKeyVault(kv =&gt; kv.SetCredential(new DefaultAzureCredential()));\n});</code></pre></p>\n<p>After the initialization, you can access the values of Key Vault references in the same way you access the values of regular App Configuration keys.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Import / Export configureation",
        "content": "<p>Import all keys and feature flags from a file and apply test label: <code>az appconfig kv import -n MyAppConfiguration --label test -s file --path D:/abc.json --format json</code></p>\n\n<p>Export all keys and feature flags with label test to a json file: <code>az appconfig kv export -n MyAppConfiguration --label test -d file --path D:/abc.json --format json</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "CLI",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/cli/azure/appconfig/kv?view=azure-cli-latest#az-appconfig-kv-import\" target=\"_blank\" rel=\"noopener noreferrer\">az appconfig kv import</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/cli/azure/appconfig/kv?view=azure-cli-latest#az-appconfig-kv-export\" target=\"_blank\" rel=\"noopener noreferrer\">az appconfig kv export</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/cli/azure/appconfig/identity?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az appconfig identity</a></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "App Service",
      "Application Insights",
      "Entra ID",
      "Functions"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "app-service",
    "topic": "app-service",
    "title": "Azure App Service",
    "description": "Comprehensive guide to Azure App Service in Microsoft Azure platform",
    "difficulty": "Beginner",
    "estimatedReadTime": 53,
    "tags": [
      "App Service",
      "app service",
      "Application Insights",
      "Key vault",
      "key vault",
      "Key Vault"
    ],
    "learningObjectives": [
      "Multi-tenant workers: Free and Shared",
      "Dedicated workers: Basic+",
      "Custom DNS Name: Shared+",
      "Free managed certificate: Basic+",
      "Staging environments (deployment slots): Standard+"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Features",
        "content": "<ul>\n<li>Multi-tenant workers: Free and Shared</li>\n<li>Dedicated workers: Basic+</li>\n<li>Custom DNS Name: Shared+</li>\n<li>Scalability (scaling out): Basic+</li>\n<li>TLS Bindings: Basic+</li>\n<li>Always On: Basic+</li>\n<li>Free managed certificate: Basic+</li>\n<li>Autoscale: Standard+</li>\n<li>Staging environments (deployment slots): Standard+</li>\n<li>Linux: Standard+</li>\n<li>AppServiceFileAuditLogs: Premium+</li>\n<li>AppServiceAntivirusScanAuditLogs: Premium+</li>\n<li>Automatic scaling: PremiumV2+</li>\n<li>Single-tenant setup (App Service Environment - ASE): Isolated+</li>\n<li>Dedicated Azure Virtual Networks: Isolated+</li>\n<li>Maximum scale-out: Isolated+</li>\n</ul>\n\n<p>The roles that handle incoming HTTP or HTTPS requests are called _front ends_. The roles that host the customer workload are called _workers_.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Tiers",
        "content": "<ul>\n<li><strong>Shared compute</strong>: <strong>Free</strong> (F1) and <strong>Shared</strong> (D1) tiers run apps on the same Azure VM with other customer apps, sharing resources and limited CPU quotas. ⭐: _development_ and _testing_ only. Each app is charged for _CPU quota_.</li>\n</ul>\n\n<ul>\n<li><strong>Dedicated compute</strong>: <strong>Basic</strong> ⏺️ (B1), <strong>Standard</strong> (S1), <strong>Premium</strong> (P1V1), <strong>PremiumV2</strong> (P1V2), and <strong>PremiumV3</strong> (P1V3) tiers utilize dedicated Azure VMs. Apps within the same App Service plan share compute resources. Higher tiers provide more VM instances for scale-out capabilities. Scaling out (_autoscale_) simply adds another VM with the same applications and services. _Each VM instance_ is charged.</li>\n</ul>\n\n<ul>\n<li><strong>Isolated</strong> (I1): The <strong>Isolated</strong> and <strong>IsolatedV2</strong> tiers run dedicated Azure VMs on _dedicated Azure Virtual Networks_. It provides network isolation on top of compute isolation to your apps. It provides the _maximum scale-out capabilities_. Charging is based on the _number of isolated workers that run your apps_.</li>\n</ul>\n\n<p>App Service plans that have no apps associated with them still incur charges because they continue to reserve the configured VM instances.</p>\n\n<p>Deployment slots, diagnostic logs, perforing backups, apps in the same App Service plan, and WebJobs _run on the same VM instances_.</p>\n\n<p>When to isolate an app into a new App Service plan:</p>\n\n<ul>\n<li>The app is resource-intensive.</li>\n<li>You want to scale the app independently from the other apps in the existing plan.</li>\n<li>The app needs resource in a different geographical region.</li>\n</ul>\n\n<h4>Move App Service plan</h4>\n\n<p>By cloning it. Source plan and destination plan must be in the same resource group, geographical region, same OS type, and supports the currently used features.</p>\n<p><pre><code class=\"language-ps\">New-AzResourceGroup -Name DestinationAzureResourceGroup -Location $destinationLocation\nNew-AzAppServicePlan -Location $destinationLocation -ResourceGroupName DestinationAzureResourceGroup -Name DestinationAppServicePlan -Tier Standard\n\n$srcapp = Get-AzWebApp -Name MyAppService -ResourceGroupName SourceAzureResourceGroup\n$destapp = New-AzWebApp -SourceWebApp $srcapp -AppServicePlan DestinationAppServicePlan -Location $destinationLocation -ResourceGroupName DestinationAzureResourceGroup -Name MyAppService2</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-3",
        "title": "Scaling",
        "content": "<p>Settings affect all apps in your App Service plan</p>\n\n<ul>\n<li><strong>Manual scaling</strong> (Basic+) - one time events (example: doing X on this date)</li>\n<li><strong>Autoscale</strong> (Standard+) - for predictable changes of application load, based on schedules (every X days/weeks/months) or resources</li>\n<li><strong>Automatic scaling</strong> (PremiumV2+) - like autoscale, but allows avoiding _cold start_ issues with _pre-warmed_ and _always ready_ instances</li>\n</ul>\n\n<p><pre><code class=\"language-sh\">az appservice plan update --name $appServicePlanName --resource-group $resourceGroup \\\n# enables automatic scaling\n      --elastic-scale true --max-elastic-worker-count &lt;YOUR_MAX_BURST&gt; \\\n# disable automatic scaling\n      --elastic-scale false</code></pre></p>\n<p>Horizontal scaling: Adding/removing virtual machines.</p>\n\n<ul>\n<li><strong>Scale out</strong> (increase VM instances): If _any_ of the rules are met</li>\n<li><strong>Scale in</strong> (decrease VM instances): If _all_ rules are met</li>\n</ul>\n\n<p>Vertical scaling: Scale up/down - when changing app service plan</p>\n\n<a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-flapping\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Flapping</strong></a>: a loop condition where a scale event triggers its opposite in a series of alternating events.\n\n<p>Setting up a scaling rule:</p>\n\n<ul>\n<li>Switch the web app to the Standard App Service Plan (for Autoscale you need Premium)</li>\n<li>Activate autoscaling for the Web App</li>\n<li>Create a scaling rule</li>\n<li>Set up a scaling condition</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Continuous integration/deployment",
        "content": "<p>Built-in CI/CD with Git (Azure DevOps, third-party, local), FTP, and container registries (ACR, third-party).</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Deployment slots",
        "content": "<p>Require Standard+.</p>\n\n<p>All of the slots for a web app share the same deployment plan and virtual machines. They have different host names.</p>\n\n<a href=\"https://learn.microsoft.com/en-us/azure/app-service/deploy-best-practices\" target=\"_blank\" rel=\"noopener noreferrer\">Best practices</a>: Deploy to staging, then swap slots to warm up instances and eliminate downtime.\n\n<ul>\n<li><strong>Swapped</strong>: Settings that define the application's _behavior_. Includes connection strings, authentication settings, public certificates, path mappings, CDN, hybrid connections.</li>\n<li><strong>Not Swapped</strong>: Settings that define the application's _environment and security_. They are less about the application itself and more about how it interacts with the external world. Examples: Private certificates, managed identities, publishing endpoints, diagnostic logs settings, CORS.</li>\n</ul>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Settings that are swapped</th>\n      <th>Settings that aren't swapped</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>General settings: framework, arch, web sockets</td>\n      <td>Publishing endpoints</td>\n    </tr>\n    <tr>\n      <td>App settings: authentication (can be disabled)</td>\n      <td>Custom domain names</td>\n    </tr>\n    <tr>\n      <td>Connection strings (can be disabled)</td>\n      <td>Non-public certificates and TLS/SSL settings</td>\n    </tr>\n    <tr>\n      <td>Handler mappings</td>\n      <td>Scale settings</td>\n    </tr>\n    <tr>\n      <td>Public certificates</td>\n      <td>WebJobs schedulers</td>\n    </tr>\n    <tr>\n      <td>WebJobs content</td>\n      <td>IP restrictions</td>\n    </tr>\n    <tr>\n      <td>Hybrid connections</td>\n      <td>Always On</td>\n    </tr>\n    <tr>\n      <td>Azure Content Delivery Network</td>\n      <td>Diagnostic log settings</td>\n    </tr>\n    <tr>\n      <td>Service endpoints</td>\n      <td>Cross-origin resource sharing (CORS)</td>\n    </tr>\n    <tr>\n      <td>Path mappings</td>\n      <td>Virtual network integration</td>\n    </tr>\n    <tr>\n      <td>Managed identities</td>\n    </tr>\n    <tr>\n      <td>Settings that end with the suffix <code>\\_EXTENSION_VERSION</code></td>\n    </tr>\n  </tbody>\n</table>\n\n<p>To enable settings swapping, add <code>WEBSITE_OVERRIDE_PRESERVE_DEFAULT_STICKY_SLOT_SETTINGS</code> as an app setting in every slot and set it to 0 or false. All settings are either swappable or not. Managed identities are never swapped.</p>\n\n<p>Note: <strong>Hybrid Connections</strong>: Lets your Azure App talk to your local server securely without changing firewall settings.</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-6",
        "title": "Custom deployment",
        "content": "<code>.deployment</code> file:\n<p><pre><code class=\"language-txt\">command = deploy.cmd # Run script before deployment\n# project = WebProject/WebProject.csproj</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Route production traffic manually",
        "content": "<code>x-ms-routing-name=</code>: <code>self</code> for production slot, <code>staging</code> for staging slot.\n\n<p>Example: <code><a href=\"<webappname>.azurewebsites.net/?x-ms-routing-name=self\">Go back to production app</a> | <a href=\"<webappname>.azurewebsites.net/?x-ms-routing-name=staging\">Go back to staging app</a></code></p>\n\n<p>⏺️: All requests go to production. Traffic can be split; new slots start at 0% (no random transfers to other slots).</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Configuration",
        "content": "<p>App settings are always encrypted when stored (encrypted-at-rest).</p>\n\n<p>App Service passes app settings to the container using the <code>--env</code> flag to set the environment variable in the container.</p>\n\n<p>App Settings and Connection Strings are set at app startup and <strong>trigger a restart when changed</strong>. They override settings in <code>Web.config</code> or <code>appsettings.json</code>.</p>\n\n<ul>\n<li><strong>Always On</strong>: Keeps app loaded; off by default and app unloads after 20 mins of inactivity. Needed for Application Insights Profiler, continuous WebJobs or WebJobs triggered by a CRON expression.</li>\n<li><strong>ARR affinity</strong>: In a multi-instance deployment, ensure that the client is routed to the same instance for the life of the session.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "App Settings",
        "content": "<p>Configuration data is hierarchical (settings can have sub-settings). In Linux, nested setting name like <code>ApplicationInsights:InstrumentationKey</code> needs to be configured as <code>ApplicationInsights__InstrumentationKey</code> Dots (<code>.</code>) will be replaced with <code>_</code>.</p>\n<p><pre><code class=\"language-cs\">// az webapp config appsettings set --settings MySetting=&quot;&lt;value&gt;&quot; MyParentSetting__MySubsetting=&quot;&lt;value&gt;&quot; ...\nstring mySettingValue = Configuration[&quot;MySetting&quot;];\nstring myParentSettingValue = Configuration[&quot;MyParentSetting/MySubSetting&quot;]; // same as &quot;MyParentSetting:MySubSetting&quot; and &quot;MyParentSetting__MySubSetting&quot;</code></pre></p>\n<p><pre><code class=\"language-jsonc\">// Save: az webapp config appsettings list --name $appName --resource-group $resourceGroup &gt; settings.json\n\n// settings.json\n[\n  { &quot;name&quot;: &quot;key1&quot;, &quot;value&quot;: &quot;value1&quot;, &quot;slotSetting&quot;: false },\n  { &quot;name&quot;: &quot;key2&quot;, &quot;value&quot;: &quot;value2&quot; }\n  // ...\n]\n\n// Load: az webapp config appsettings set --resource-group $resourceGroup --name $appName --settings @settings.json</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Source app settings",
        "content": "<p>Key vault: Prerequisites: Grant your app access to a key vault to a managed identity</p>\n\n<ul>\n<li><code>@Microsoft.KeyVault(SecretUri=<a href=\"https://myvault.vault.azure.net/secrets/mysecret/)\" target=\"_blank\" rel=\"noopener noreferrer\">https://myvault.vault.azure.net/secrets/mysecret/)</a></code></li>\n<li><code>@Microsoft.KeyVault(VaultName=myvault;SecretName=mysecret)</code></li>\n</ul>\n\n<p>App Configuration: <code>@Microsoft.AppConfiguration(Endpoint=<a href=\"https://myAppConfigStore.azconfig.io;\" target=\"_blank\" rel=\"noopener noreferrer\">https://myAppConfigStore.azconfig.io;</a> Key=myAppConfigKey; Label=myKeysLabel)</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Connection strings",
        "content": "<p>Connection strings are prefixed with connection type. Similar to how they're set in the <code>Web.config</code> under <code><connectionStrings></code>.</p>\n<p><pre><code class=\"language-cs\">// az webapp config connection-string set --connection-string-type SQLServer --settings MyDb=&quot;Server=myserver;Database=mydb;User Id=myuser;Password=mypassword;&quot; ...\nstring myConnectionString = Configuration.GetConnectionString(&quot;MyDb&quot;);\nstring myConnectionStringVerbose = Configuration.GetConnectionString(&quot;SQLCONNSTR_MyDb&quot;); // Same as above\nstring myConnectionStringEnv = Environment.GetEnvironmentVariable(&quot;SQLCONNSTR_MyDb&quot;); // Same as above</code></pre></p>\n<p><pre><code class=\"language-jsonc\">// Save: az webapp config connection-string list --name $appName --resource-group $resourceGroup &gt; conn-settings.json\n\n// conn-settings.json\n[\n  {\n    &quot;name&quot;: &quot;name-1&quot;,\n    &quot;value&quot;: &quot;conn-string-1&quot;,\n    &quot;type&quot;: &quot;SQLServer&quot;,\n    &quot;slotSetting&quot;: false\n  },\n  {\n    &quot;name&quot;: &quot;name-2&quot;,\n    &quot;value&quot;: &quot;conn-string-2&quot;,\n    &quot;type&quot;: &quot;PostgreSQL&quot;\n  }\n  // ...\n]\n\n// Load: az webapp config connection-string set --resource-group $resourceGroup --name $appName --settings @conn-settings.json</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "General Settings",
        "content": "<p><pre><code class=\"language-sh\">az webapp config set --name $appName --resource-group $resourceGroup \\\n    --use-32bit-worker-process [true|false] \\\n    --web-sockets-enabled [true|false] \\\n    --always-on [true|false] \\\n    --http20-enabled \\\n    --auto-heal-enabled [true|false] \\\n    --remote-debugging-enabled [true|false] \\ # turn itself off after 48 hours\n    --number-of-workers\n\naz webapp config appsettings set --name $appName --resource-group $resourceGroup /\n    --settings \\\n        WEBSITES_PORT=8000\n        PRE_BUILD_COMMAND=&quot;echo foo, scripts/prebuild.sh&quot; \\\n        POST_BUILD_COMMAND=&quot;echo foo, scripts/postbuild.sh&quot; \\\n        PROJECT=&quot;&lt;project-name&gt;/&lt;project-name&gt;.csproj&quot; \\ # Deploy multi-project solutions\n        ASPNETCORE_ENVIRONMENT=&quot;Development&quot;\n# Custom environment variables\n        DB_HOST=&quot;myownserver.mysql.database.azure.com&quot;\n# Verify at: https://&lt;app-name&gt;.scm.azurewebsites.net/Env</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Handler Mappings",
        "content": "<p>Add custom script processors to handle requests for specific file extensions.</p>\n\n<ul>\n<li><strong>Extension</strong>: The file extension you want to handle, such as _\\*.php_ or _handler.fcgi_.</li>\n<li><strong>Script processor</strong>: The absolute path of the script processor. Requests to files that match the file extension are processed by the script processor. Use the path <code>D:\\home\\site\\wwwroot</code> to refer to your app's root directory.</li>\n<li><strong>Arguments</strong>: Optional command-line arguments for the script processor.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Map a URL path to a directory",
        "content": "<p><pre><code class=\"language-jsonc\">// json.txt\n[\n  {\n    &quot;physicalPath&quot;&#39;:&#39; &quot;site\\\\wwwroot\\\\public&quot;, // serve app from /public instead of root (site\\\\wwwroot)\n    &quot;preloadEnabled&quot;&#39;:&#39; false,\n    &quot;virtualDirectories&quot;&#39;:&#39; null,\n    &quot;virtualPath&quot;&#39;:&#39; &quot;/&quot; // any path can be mapped\n  }\n]\n\n// az resource update --set properties.virtualApplications=@json.txt --resource-type Microsoft.Web/sites/config --resource-group $resourceGroup --name $appName</code></pre></p>\n<p>This works for both Windows and Linux apps.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Local Cache",
        "content": "<p>Not supported for function apps or containerized App Service apps. To enable: <code>WEBSITE_LOCAL_CACHE_OPTION = Always</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "Persistence",
        "content": "<p>When persistent storage is _on_ (⏺️ for Linux containers), the <code>/home</code> directory allows file persistence and sharing. All writes to <code>/home</code> are accessible by all instances, but existing files overwrite /home's contents on start.</p>\n\n<code>/home/LogFiles</code> always persists if logging is enabled, regardless of persistent storage status.\n\n<p>Disable default persistent storage on Linux containers: <code>az webapp config appsettings set --settings WEBSITES_ENABLE_APP_SERVICE_STORAGE=false ...</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-17",
        "title": "Mount Azure Storage as a local share in App Service",
        "content": "<ul>\n<li>Supports Azure Files (read/write) and Azure Blobs (read-only for Linux).</li>\n<li>App backups don't include storage mounts.</li>\n<li>Custom containers offer lower latency for heavy read-only file access compared to built-in Linux images that use Azure Storage.</li>\n<li>Storage mount changes will restart the app.</li>\n<li>Deleting Azure Storage requires corresponding mount configuration removal.</li>\n<li>Storage failover requires app restart or remounting of Azure Storage.</li>\n<li>Don't use mounts for local databases or apps needing file locks.</li>\n</ul>\n\n<p>Mount: <code>az webapp config storage-account add --custom-id <custom-id> --storage-type AzureFiles --share-name <share-name> --account-name <storage-account-name> --access-key \"<access-key>\" --mount-path <mount-path-directory> ...</code></p>\n<p>Check: <code>az webapp config storage-account list ...</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-18",
        "title": "Limitations",
        "content": "<ul>\n<li>Don't map to <code>/</code>, <code>/home</code>, or <code>/tmp</code> to avoid issues.</li>\n<li>Storage firewall support via service and private endpoints only.</li>\n<li>No FTP/FTPS for custom-mounted storage.</li>\n<li>Azure Storage billed separately from App Service.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-19",
        "title": "Best Practices",
        "content": "<ul>\n<li>Place app and storage in the same Azure region.</li>\n<li>Avoid regenerating access key.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Deploying apps (gist)",
        "content": "<ol>\n<li>Create resource group: <code>az group create</code></li>\n<li>Create App Service plan: <code>az appservice plan create --location $location</code></li>\n<li>Create web app: <code>az webapp create --runtime \"DOTNET|6.0\"</code></li>\n<li>(optinal) Use managed identity for ACR:</li>\n</ol>\n<ul>\n<li>Assign managed identity to the web app</li>\n<li>Assign <code>AcrPull</code> role: <code>az role assignment create --assignee $principalId --scope $registry_resource_id --role \"AcrPull\"</code></li>\n<li>Set generic config to <code>{acrUseManagedIdentityCreds:true}</code> for system identity and <code>{acrUserManagedIdentityID:id}</code> for user identity: <code>az webapp config set --generic-configurations '<json>'</code></li>\n</ul>\n<ol>\n<li>(optional) Create deployment slot (staging) (Standard+): <code>az webapp deployment slot create</code></li>\n<li>Deploy app (add <code>--slot staging</code> to use deployment slot):</li>\n</ol>\n<ul>\n<li>Git: <code>az webapp deployment source config --repo-url $gitrepo --branch master --manual-integration</code></li>\n<li>Docker: <code>az webapp config container set --docker-custom-image-name</code></li>\n<li>Compose (skip step 3): <code>az webapp create --multicontainer-config-type compose --multicontainer-config-file $dockerComposeFile</code></li>\n<li>Local ZIP file: <code>az webapp deploy --src-path \"path/to/zip\"</code></li>\n<li>Remote ZIP file: <code>az webapp deploy --src-url \"<url>\"</code></li>\n</ul>\n<ol>\n<li>(optional) Set some settings: <code>az webapp config appsettings set --settings</code> (ex: <code>DEPLOYMENT_BRANCH='main'</code> for git, <code>SCM_DO_BUILD_DURING_DEPLOYMENT=true</code> for build automation)</li>\n<li>(optional) Swap slots: <code>az webapp deployment slot swap --slot staging</code></li>\n</ol>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "ARM Templates",
        "content": "<p>In JSON format.</p>\n\n<code>az group export --name $resourceGroup</code> - create ARM template\n\n<code>az deployment group export --resource-group $resourceGroup --name $deployment</code> - create ARM template for specific deploy\n\n<code>az deployment group create --resource-group $resourceGroup --template-file $armTemplateJsonFile</code> - create deployment group from ARM template",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-22",
        "title": "Authentication",
        "content": "<p>Enabling this feature will automatically redirect all requests to HTTPS. You can either restrict access to authenticated users or allow anonymous requests. Built-in token store for managing tokens.</p>\n\n<p>On Windows, middleware shares your app's IIS sandbox, but on Linux or in containers, it runs separately.</p>\n\n<h4>Service Identity</h4>\n\n<p>Main topic: <a href=\"./Managed%20Identities.md\" target=\"_blank\" rel=\"noopener noreferrer\">Managed Identities</a></p>\n\n<p>Each deployment slot / app has it's own managed identity configuration.</p>\n\n<h5>REST endpoint reference</h5>\n\n<p>An app with a managed identity defines two environment variables to make an endpoint available. This endpoint can be used to request tokens for accessing other Azure services</p>\n\n<ul>\n<li><code>IDENTITY_ENDPOINT</code> endpoint from which apps can request tokens.</li>\n<li><code>IDENTITY_HEADER</code> - (uuid) used to help mitigate server-side request forgery (SSRF) attacks.</li>\n</ul>\n\n<p>Endpoint parameters:</p>\n\n<ul>\n<li>Required: <code>resource</code>, <code>api-version</code>, <code>X-IDENTITY-HEADER</code> (header)</li>\n<li>Optional: <code>client_id</code>, <code>principal_id</code>, <code>mi_res_id</code></li>\n</ul>\n\n<p>For user-assigned identities, include one of the optional properties; without it, a system-assigned identity token is requested.</p>\n\n<p>Example:</p>\n<p><pre><code class=\"language-http\">GET {IDENTITY_ENDPOINT}?resource=https://vault.azure.net&amp;api-version=2019-08-01&amp;client_id=XXX\nX-IDENTITY-HEADER: {IDENTITY_HEADER}</code></pre></p>\n<h5>Authentication flows</h5>\n\n<p>OAuth enables apps to access resources via user permissions, bypassing the need for credentials. Azure App Service manages this through its authentication module, which handles sessions and tokens. It can authenticate requests and redirect unauthenticated users (login page or 401). Tokens are stored in a token store when enabled. Note: An Access Rule is required.</p>\n\n<ul>\n<li><strong>Server-directed</strong> (no SDK): handled by App Service, for browser apps</li>\n<li><strong>Client-directed</strong> (SDK): handled by the app, for non-browser apps</li>\n</ul>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Step</th>\n      <th>Server-directed</th>\n      <th>Client-directed</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Sign user in</td>\n      <td>Redirects client to <code>/.auth/login/aad</code> (MS Identity Platform)</td>\n      <td>Client code signs user in directly with provider's SDK and receives an authentication token.</td>\n    </tr>\n    <tr>\n      <td>Post-authentication</td>\n      <td>Provider redirects client to <code>/.auth/login/aad/callback</code></td>\n      <td>Client code posts token from provider to <code>/.auth/login/aad</code> for validation.</td>\n    </tr>\n    <tr>\n      <td>Establish authenticated session</td>\n      <td>App Service adds authenticated cookie to response</td>\n      <td>App Service returns its own authentication token to client code</td>\n    </tr>\n    <tr>\n      <td>Serve authenticated content</td>\n      <td>Client includes authentication cookie in subsequent requests</td>\n      <td>Client code presents authentication token in <code>X-ZUMO-AUTH</code> header</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Access another app: Add header <code>Authorization: Bearer ${req.headers['x-ms-token-aad-access-token']}</code></p>\n\n<h5>Access user claims in app code</h5>\n<p><pre><code class=\"language-cs\">private class ClientPrincipalClaim\n{\n    [JsonPropertyName(&quot;typ&quot;)] public string Type { get; set; }\n    [JsonPropertyName(&quot;val&quot;)] public string Value { get; set; }\n}\n\nprivate class ClientPrincipal\n{\n    [JsonPropertyName(&quot;auth_typ&quot;)] public string IdentityProvider { get; set; }\n    [JsonPropertyName(&quot;name_typ&quot;)] public string NameClaimType { get; set; }\n    [JsonPropertyName(&quot;role_typ&quot;)] public string RoleClaimType { get; set; }\n    [JsonPropertyName(&quot;claims&quot;)] public IEnumerable&lt;ClientPrincipalClaim&gt; Claims { get; set; }\n}\n\npublic static ClaimsPrincipal Parse(HttpRequest req)\n{\n    var principal = new ClientPrincipal();\n\n    if (req.Headers.TryGetValue(&quot;x-ms-client-principal&quot;, out var header))\n    {\n        var json = Encoding.UTF8.GetString(Convert.FromBase64String(header[0]));\n        principal = JsonSerializer.Deserialize&lt;ClientPrincipal&gt;(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });\n    }\n\n    // Code can now iterate through `principal.Claims` for validation\n    // or converts it to a `ClaimsPrincipal` for later use in the request pipeline.\n\n    var identity = new ClaimsIdentity(principal.IdentityProvider, principal.NameClaimType, principal.RoleClaimType);\n    identity.AddClaims(principal.Claims.Select(c =&gt; new Claim(c.Type, c.Value)));\n\n    return new ClaimsPrincipal(identity);\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 3
      },
      {
        "id": "section-23",
        "title": "Certificates",
        "content": "<p>A certificate is accessible to all apps in the same resource group and region combination.</p>\n\n<ul>\n<li><strong>Free Managed Certificate</strong>: Auto renewed every 6 months, no wildcard certificates or private DNS, can't be exported (<strong>cannot be used in other apps</strong>), not supported in ASE.</li>\n<li><strong>App Service Certificate</strong>: A private certificate that is managed by Azure. Automated certificate management, renewal and export options.</li>\n<li><strong>Using Key Vault</strong>: Store private certificates (same requerenments) in Key Vault. Automatic renewal, except for non-integrated certificates (<code>az keyvault certificate create ...</code>, default policy: <code>az keyvault certificate get-default-policy</code>)</li>\n<li><strong>Uploading a Private Certificate</strong>: Requires a password-protected PFX file encrypted with triple DES, with 2048-bit private key and all intermediate/root certificates in the chain.</li>\n<li><strong>Uploading a Public Certificate</strong>: For accessing remote resources.</li>\n</ul>\n\n<a href=\"https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-certificate-in-code\" target=\"_blank\" rel=\"noopener noreferrer\">Make certificate accessible</a>: <code>az webapp config appsettings set --settings WEBSITE_LOAD_CERTIFICATES=<comma-separated-certificate-thumbprints></code>, then use <code>X509Store.Certificates.Find(X509FindType.FindByThumbprint, \"certificate-thumbprint\", true)</code> to load it.\n\n<h4>TLS mutual authentication</h4>\n\n<p>Requires Basic+ plan; set from <code>Configuration > General Settings</code>.</p>\n\n<p>TLS termination is handled by frontend load balancer. When enabling client certificates (<code>az webapp update --set clientCertEnabled=true ...</code>), <code>X-ARR-ClientCert</code> header is added. Accessing client certificate: <code>HttpRequest.ClientCertificate</code>:</p>\n\n<p>For NodeJs, client certificate is accessed through request header: <code>req.get('X-ARR-ClientCert');</code></p>\n<p><pre><code class=\"language-cs\">// Forward the client certificate from the frontend load balancer\nservices.AddCertificateForwarding(options =&gt; { options.CertificateHeader = &quot;X-ARR-ClientCert&quot;; });\n\n// Adds certificate-based authentication to the application.\nservices.AddAuthentication(CertificateAuthenticationDefaults.AuthenticationScheme).AddCertificate();</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-24",
        "title": "CORS",
        "content": "<p>For apps: <code>az webapp cors add --allowed-origins $website ...</code></p>\n\n<p>For storage: <code>az storage cors add --services blob --methods GET POST --origins $website --allowed-headers '<em>' --exposed-headers '</em>' --max-age 200 ...</code></p>\n\n<p>_To enable the sending of credentials like cookies or authentication tokens in your app_, the browser may require the <code>ACCESS-CONTROL-ALLOW-CREDENTIALS</code> header in the response: <code>az resource update --set properties.cors.supportCredentials=true --namespace Microsoft.Web --resource-type config --parent sites/$appName ...</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-25",
        "title": "Networking",
        "content": "<ul>\n<li><strong>Deployment Types</strong></li>\n</ul>\n\n<ul>\n<li>Multi-tenant setup where your application shares resources with other applications.</li>\n<li>Single-tenant setup, called App Service Environment (ASE), where your application gets its own dedicated resources within your Azure virtual network.</li>\n</ul>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/app-service/networking-features\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Networking Features</strong></a>: Manage both incoming (inbound) and outgoing (outbound) network traffic.</li>\n</ul>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Type</th>\n      <th>Use Cases</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>App-assigned address</td>\n      <td>Inbound</td>\n      <td>Support IP-based SSL for your app; Support a dedicated inbound address for your app</td>\n    </tr>\n    <tr>\n      <td>Access restrictions</td>\n      <td>Inbound</td>\n      <td>Restrict access to your app from a set of well-defined IP addresses</td>\n    </tr>\n    <tr>\n      <td>Service endpoints/Private endpoints</td>\n      <td>Inbound</td>\n      <td>Restrict access to your Azure Service Resources to only your virtual network</td>\n    </tr>\n    <tr>\n      <td>Hybrid Connections</td>\n      <td>Outbound</td>\n      <td>Access an on-premises system or service securely (from Azure to On-Premises)</td>\n    </tr>\n    <tr>\n      <td>Gateway-required virtual network integration</td>\n      <td>Outbound</td>\n      <td>Access Azure or on-premises resources via ExpressRoute or VPN (two way Azure-On-Premises)</td>\n    </tr>\n    <tr>\n      <td>Virtual network integration</td>\n      <td>Outbound</td>\n      <td>Access Azure network resources</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Hybrid Connections: from Azure to On-Premises; Gateway: two way Azure-On-Premises.</p>\n\n<strong>Ingress</strong> - manages external access to the services running in a container. It allows you to define how external traffic should be routed to the services within your containerized application. Set \"external\" to allow public traffic. Ingress configurations typically specify rules for directing HTTP and HTTPS traffic to specific services based on factors like the request path or host header.\n\n<ul>\n<li><strong>Default Networking Behavior</strong>: Free and Shared plans use multi-tenant workers, meaning your application shares resources with others. Plans from Basic and above use dedicated workers, meaning your application gets its own resources. If you have a Standard App Service plan, all the apps in that plan run on the same worker.</li>\n</ul>\n\n<ul>\n<li><strong>Outbound Addresses</strong>: When your application needs to make a call to an external service, it uses an outbound IP address. This address is shared among all applications running on the same type of worker VM.</li>\n</ul>\n\n<ul>\n<li>To find the current outbound IP addresses: <code>az webapp show --query outboundIpAddresses ...</code></li>\n<li>To find all possible outbound IP addresses: <code>az webapp show --query possibleOutboundIpAddresses ...</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-26",
        "title": "Diagnostics",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Type</th>\n      <th>Platform</th>\n      <th>Location</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Application logging</td>\n      <td>Windows, Linux</td>\n      <td>App Service file system and/or Azure Storage blobs</td>\n      <td>Useful for debugging issues (bugs or unexpected behavior) within application code.</td>\n    </tr>\n    <tr>\n      <td>Web server logging</td>\n      <td>Windows</td>\n      <td>App Service file system or Azure Storage blobs</td>\n      <td>Raw HTTP request data. Useful for diagnosing issues related to connectivity, HTTP errors (<code>404</code>), and server-level issues (<code>5xx</code>).</td>\n    </tr>\n    <tr>\n      <td>Detailed Error Messages</td>\n      <td>Windows</td>\n      <td>App Service file system</td>\n      <td>Copies of the .htm error pages that would have been sent to the client browser.</td>\n    </tr>\n    <tr>\n      <td>Failed request tracing</td>\n      <td>Windows</td>\n      <td>App Service file system</td>\n    </tr>\n    <tr>\n      <td>Deployment logging</td>\n      <td>Windows, Linux</td>\n      <td>App Service file system</td>\n      <td>Logs for when you publish content to an app.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>The _App Service file system_ option is for temporary debugging purposes, and turns itself off in 12 hours.</p>\n<p>_The Blob_ option is for long-term logging, includes additional information. .Net apps only.</p>\n\n<code>az webapp log config --application-logging {azureblobstorage, filesystem, off} --name MyWebapp --resource-group $resourceGroup</code>\n\n<p>Accessing log files:</p>\n\n<ul>\n<li>Linux/custom containers: <code><a href=\"https://$appName.scm.azurewebsites.net/api/logs/docker/zip\" target=\"_blank\" rel=\"noopener noreferrer\">https://$appName.scm.azurewebsites.net/api/logs/docker/zip</a></code>. The ZIP file contains console output logs for both the docker host and the docker container.</li>\n<li>Windows apps: <code><a href=\"https://$appName.scm.azurewebsites.net/api/dump\" target=\"_blank\" rel=\"noopener noreferrer\">https://$appName.scm.azurewebsites.net/api/dump</a></code></li>\n</ul>\n\n<code>AppServiceFileAuditLogs</code> and <code>AppServiceAntivirusScanAuditLogs</code> log types are available only for Premium+.\n\n<code>AllMetrics</code> settings are collected by agents on to the App Service and report the usage of host resources. These are items like CPU usage, memory usage, and disk I/O used.",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-27",
        "title": "Stream logs",
        "content": "<p>To stream logs in the Azure portal, navigate to your app and select <strong>Log stream</strong>.</p>\n\n<p>Logs written to .txt, .log, or .htm files in <code>/home/LogFiles</code> (or <code>D:\\home\\LogFiles</code> for Windows apps) . Note, some logs may appear out of order due to buffering.</p>\n\n<p>CLI: <code>az webapp log tail ...</code></p>\n<p><pre><code class=\"language-sh\"># Stream HTTP logs\naz webapp log tail --provider http --name $app --resource-group $resourceGroup\n\n# Stream errors\naz webapp log tail --filter Error --name $app --resource-group $resourceGroup # filter by word Error\naz webapp log tail --only-show-errors --name $app --resource-group $resourceGroup</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-28",
        "title": "Monitoring apps",
        "content": "<p>Metrics: CPU Percentage, Memory Percentage, Data In, Data Out - used across all instances of the plan (<strong>not a single app!</strong>).</p>\n\n<p>Example: <code>Metric: CPU Percentage; Resource: <AppServicePlanName></code></p>\n<p><pre><code class=\"language-sh\">az monitor metrics list --resource $app_service_plan_resource_id --metric &quot;Percentage CPU&quot; --time-grain PT1M --output table</code></pre></p>\n<p>CPU Time is valuable for apps on Free or Shared plans, where quotas are set by app's CPU minutes usage.</p>\n<p>The CPU percentage is valuable for apps on Basic+, providing insights into usage across scalable instances.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-29",
        "title": "Health Checks",
        "content": "<p>Health Check pings the specified path every minute. If an instance fails to respond with a valid status code after 10 requests, it's marked unhealthy and removed from the load balancer. If it recovers, it's returned to the load balancer. If it stays unhealthy for an hour, it's replaced (only for Basic+).</p>\n\n<p>For private endpoints check if <code>x-ms-auth-internal-token</code> request header equals the hashed value of <code>WEBSITE_AUTH_ENCRYPTION_KEY</code> environment variable. You should first use features such as IP restrictions, client certificates, or a Virtual Network to restrict application access.</p>\n\n<p>Configure path: <code>az webapp config set --health-check-path <Path> --resource-group $resourceGroup --name $webApp</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-30",
        "title": "Deploying apps (full)",
        "content": "<p>```sh</p>\n<p>let \"randomIdentifier=$RANDOM*$RANDOM\"</p>\n<p>location=\"East US\"</p>\n<p>resourceGroup=\"app-service-rg-$randomIdentifier\"</p>\n<p>tag=\"deploy-github.sh\"</p>\n<p>appServicePlan=\"app-service-plan-$randomIdentifier\"</p>\n<p>webapp=\"web-app-$randomIdentifier\"</p>\n<p>gitrepo=\"<a href=\"https://github.com/Azure-Samples/dotnet-core-sample\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Azure-Samples/dotnet-core-sample</a>\"</p>\n\n<p>az group create --name $resourceGroup --location \"$location\" --tag $tag</p>\n\n<p>az appservice plan create --name $appServicePlan --resource-group $resourceGroup --location $location # --sku B1</p>\n<h1>az appservice plan create --name $appServicePlan --resource-group $resourceGroup --sku S1 --is-linux</h1>\n\n<p>az webapp create --name $webapp --plan $appServicePlan --runtime \"DOTNET|6.0\" --resource-group $resourceGroup</p>\n\n<h1><a href=\"https://learn.microsoft.com/en-us/azure/app-service/scripts/cli-deploy-github\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/scripts/cli-deploy-github</a></h1>\n<p>github_deployment() {</p>\n<p>echo \"Deploying from GitHub\"</p>\n<p>az webapp deployment source config --name $webapp --repo-url $gitrepo --branch master --manual-integration --resource-group $resourceGroup</p>\n\n<h1>Change deploiment branch to \"main\"</h1>\n<h1>az webapp config appsettings set --name $webapp --settings DEPLOYMENT_BRANCH='main' --resource-group $resourceGroup</h1>\n<p>}</p>\n\n<h1><a href=\"https://learn.microsoft.com/en-us/azure/app-service/scripts/cli-deploy-staging-environment\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/scripts/cli-deploy-staging-environment</a></h1>\n<h1>Use it to avoid locking files</h1>\n<p>staging_deployment() {</p>\n<h1>Deployment slots require Standard tier, default is Basic (B1)</h1>\n<p>az appservice plan update --name $appServicePlan --sku S1 --resource-group $resourceGroup</p>\n\n<p>echo \"Creating a deployment slot\"</p>\n<p>az webapp deployment slot create --name $webapp --slot staging --resource-group $resourceGroup</p>\n\n<p>echo \"Deploying to Staging Slot\"</p>\n<p>az webapp deployment source config --name $webapp --resource-group $resourceGroup \\</p>\n<p>--slot staging \\</p>\n<p>--repo-url $gitrepo \\</p>\n<p>--branch master --manual-integration \\</p>\n\n<p>echo \"Swapping staging slot into production\"</p>\n<p>az webapp deployment slot swap --slot staging --name $webapp --resource-group $resourceGroup</p>\n<p>}</p>\n\n<h1><a href=\"https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container?tabs=debian&pivots=container-linux#change-the-docker-image-of-a-custom-container\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container?tabs=debian&pivots=container-linux#change-the-docker-image-of-a-custom-container</a></h1>\n<p>docker_deployment() {</p>\n<h1>(Optional) Use managed identity: <a href=\"https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container?tabs=debian&pivots=container-linux#change-the-docker-image-of-a-custom-container\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container?tabs=debian&pivots=container-linux#change-the-docker-image-of-a-custom-container</a></h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-31",
        "title": "Enable the system-assigned managed identity for the web app",
        "content": "<p>az webapp identity assign --name $webapp --resource-group $resourceGroup</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-32",
        "title": "Grant the managed identity permission to access the container registry",
        "content": "<p>az role assignment create --assignee $principalId --scope $registry_resource_id --role \"AcrPull\"</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-33",
        "title": "Configure your app to use the system managed identity to pull from Azure Container Registry",
        "content": "<p>az webapp config set --generic-configurations '{\"acrUseManagedIdentityCreds\": true}' --name $webapp --resource-group $resourceGroup</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-34",
        "title": "(OR) Set the user-assigned managed identity ID for your app",
        "content": "<p>az webapp config set --generic-configurations '{\"acrUserManagedIdentityID\": \"$principalId\"}' --name $webapp --resource-group $resourceGroup</p>\n\n<p>echo \"Deploying from DockerHub\" # Custom container</p>\n<p>az webapp config container set --name $webapp --resource-group $resourceGroup \\</p>\n<p>--docker-custom-image-name <docker-hub-repo>/<image> \\</p>\n<h1>Private registry: <a href=\"https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container?tabs=debian&pivots=container-linux#use-an-image-from-a-private-registry\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container?tabs=debian&pivots=container-linux#use-an-image-from-a-private-registry</a></h1>\n<p>--docker-registry-server-url <private-repo-url> \\</p>\n<p>--docker-registry-server-user <username> \\</p>\n<p>--docker-registry-server-password <password></p>\n\n<h1>NOTE: Another version of it, using</h1>\n<h1>az webapp create --deployment-container-image-name <registry-name>.azurecr.io/$image:$tag</h1>\n<h1><a href=\"https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container</a></h1>\n<p>}</p>\n\n<h1><a href=\"https://learn.microsoft.com/en-us/azure/app-service/tutorial-multi-container-app\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/tutorial-multi-container-app</a></h1>\n<p>compose_deployment() {</p>\n<p>echo \"Creating webapp with Docker Compose configuration\"</p>\n<p>$dockerComposeFile=docker-compose-wordpress.yml</p>\n<h1>Note that az webapp create is different</h1>\n<p>az webapp create --resource-group $resourceGroup --plan $appServicePlan --name wordpressApp --multicontainer-config-type compose --multicontainer-config-file $dockerComposeFile</p>\n\n<p>echo \"Setup database\"</p>\n<p>az mysql server create --resource-group $resourceGroup --name wordpressDb  --location $location --admin-user adminuser --admin-password letmein --sku-name B_Gen5_1 --version 5.7</p>\n<p>az mysql db create --resource-group $resourceGroup --server-name <mysql-server-name> --name wordpress</p>\n\n<p>echo \"Setting app settings for WordPress\"</p>\n<p>az webapp config appsettings set \\</p>\n<p>--settings WORDPRESS_DB_HOST=\"<mysql-server-name>.mysql.database.azure.com\" WORDPRESS_DB_USER=\"adminuser\" WORDPRESS_DB_PASSWORD=\"letmein\" WORDPRESS_DB_NAME=\"wordpress\" MYSQL_SSL_CA=\"BaltimoreCyberTrustroot.crt.pem\" \\</p>\n<p>--resource-group $resourceGroup \\</p>\n<p>--name wordpressApp</p>\n<p>}</p>\n\n<h1><a href=\"https://learn.microsoft.com/en-us/azure/app-service/deploy-zip?tabs=cli\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/app-service/deploy-zip?tabs=cli</a></h1>\n<h1>uses the same Kudu service that powers continuous integration-based deployments</h1>\n<p>zip_archive() {</p>\n<p>az webapp deploy --src-path \"path/to/zip\" --name $webapp --resource-group $resourceGroup</p>\n<h1>Zip from url</h1>\n<h1>az webapp deploy --src-url \"<a href=\"https://storagesample.blob.core.windows.net/sample-container/myapp.zip?sv=2021-10-01&sb&sig=slk22f3UrS823n4kSh8Skjpa7Naj4CG3\" target=\"_blank\" rel=\"noopener noreferrer\">https://storagesample.blob.core.windows.net/sample-container/myapp.zip?sv=2021-10-01&sb&sig=slk22f3UrS823n4kSh8Skjpa7Naj4CG3</a>\" --name $webapp --resource-group $resourceGroup</h1>\n\n<h1>(Optional) Enable build automation</h1>\n<h1>az webapp config appsettings set --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true --name $webapp --resource-group $resourceGroup</h1>\n<p>}</p>\n<p>```</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-35",
        "title": "CLI",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Command</th>\n      <th>Brief Explanation</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az appservice plan</a></td>\n      <td>Manage App Service Plans.</td>\n      <td><code>az appservice plan create --name MyPlan --resource-group MyResourceGroup --sku FREE</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-update\" target=\"_blank\" rel=\"noopener noreferrer\">az appservice plan update</a></td>\n      <td>Update an App Service Plan.</td>\n      <td><code>az appservice plan update --name MyPlan --sku STANDARD</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp</a></td>\n      <td>Manage web apps.</td>\n      <td><code>az webapp list</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-create\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp create</a></td>\n      <td>Create a web app.</td>\n      <td><code>az webapp create --name MyApp --plan MyPlan --resource-group MyResourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/deployment?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp deployment</a></td>\n      <td>Manage web app deployments.</td>\n      <td><code>az webapp deployment list-publishing-profiles --name MyApp</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/config?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp config</a></td>\n      <td>Manage web app configurations.</td>\n      <td><code>az webapp config set --name MyApp --ftps-state AllAllowed</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/config/appsettings?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp config appsettings</a></td>\n      <td>Manage web app appsettings.</td>\n      <td><code>az webapp config appsettings set --name MyApp --settings KEY=VALUE</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/config/connection-string?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp config connection-string</a></td>\n      <td>Manage web app connection strings.</td>\n      <td><code>az webapp config connection-string set --name MyApp --connection-string-type SQLAzure --settings NAME=CONNECTION_STRING</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/cors?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp cors</a></td>\n      <td>Manage Cross-Origin Resource Sharing (CORS) for web apps.</td>\n      <td><code>az webapp cors add --name MyApp --allowed-origins '<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://example.com</a>'</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-show\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp show</a></td>\n      <td>Get details of a web app.</td>\n      <td><code>az webapp show --name MyApp --resource-group MyResourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/identity?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp identity</a></td>\n      <td>Manage web app's managed service identity.</td>\n      <td><code>az webapp identity assign --name MyApp --resource-group MyResourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/identity?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az identity</a></td>\n      <td>Manage Managed Service Identities (MSI).</td>\n      <td><code>az identity create --resource-group MyResourceGroup --name MyIdentity</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/log?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp log</a></td>\n      <td>Manage web app logs.</td>\n      <td><code>az webapp log tail --name MyApp --resource-group MyResourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/log?view=azure-cli-latest#az-webapp-log-config\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp log config</a></td>\n      <td>Configure logging for a web app.</td>\n      <td><code>az webapp log config --name MyWebApp --resource-group MyResourceGroup --web-server-logging filesystem</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/resource?view=azure-cli-latest#az-resource-update\" target=\"_blank\" rel=\"noopener noreferrer\">az resource update</a></td>\n      <td>Update a resource.</td>\n      <td><code>az resource update --ids RESOURCE_ID --set properties.key=value</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp/config/storage-account?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp config storage-account</a></td>\n      <td>Manage web app's Azure Storage account configurations.</td>\n      <td><code>az webapp config storage-account update --name MyApp --custom-id CustomId --storage-type AzureBlob --account-name MyStorageAccount</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-list-runtimes\" target=\"_blank\" rel=\"noopener noreferrer\">az webapp list-runtimes</a></td>\n      <td>List available runtime stacks.</td>\n      <td><code>az webapp list-runtimes --linux</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/monitor/metrics?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az monitor metrics</a></td>\n      <td>Manage metrics.</td>\n      <td><code>az monitor metrics list --resource RESOURCE_ID --metric-names \"Percentage CPU\"</code></td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 2
      }
    ],
    "relatedTopics": [
      "App Configuration",
      "Application Insights",
      "Azure Portal",
      "Containers"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "application-insights",
    "topic": "application-insights",
    "title": "Azure Application Insights",
    "description": "Application Insights, an extension of Azure Monitor, is a comprehensive Application Performance Monitoring (APM) tool. It provides unique features that help monitor applications throughout their li...",
    "difficulty": "Advanced",
    "estimatedReadTime": 25,
    "tags": [
      "Application Insights",
      "Azure Functions",
      "Event Hub",
      "Service Bus",
      "Blob Storage",
      "Docker"
    ],
    "learningObjectives": [
      "Dependency rates, response times, and failure rates: Check if external services are causing slowdowns.",
      "Page views and load performance: Information reported by users' browsers.",
      "AJAX calls: Monitor rates, response times, and failure rates for AJAX calls from web pages.",
      "[User, session, and event analysis](https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-segmentation)"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Experience with REST APIs and HTTP protocols",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Application Insights, an extension of Azure Monitor, is a comprehensive Application Performance Monitoring (APM) tool. It provides unique features that help monitor applications throughout their lifecycle, from development and testing to production.</p>\n\n<p>Note: Application Insights automatically captures Session Id, so no need to manually capture it.</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Live Metrics</td>\n      <td>Real-time monitoring without affecting the host. For immediate insights during critical deployments.</td>\n    </tr>\n    <tr>\n      <td>Availability (Synthetic Transaction Monitoring)</td>\n      <td>Tests endpoints for availability and responsiveness. To ensure uptime and SLAs are met.</td>\n    </tr>\n    <tr>\n      <td>GitHub or Azure DevOps integration</td>\n      <td>Create GitHub or Azure DevOps work items in the context of Application Insights data.</td>\n    </tr>\n    <tr>\n      <td>Usage</td>\n      <td>Tracks popular features and user interactions.</td>\n    </tr>\n    <tr>\n      <td>Smart Detection</td>\n      <td>Automatic failure and anomaly detection through proactive telemetry analysis.</td>\n    </tr>\n    <tr>\n      <td>Application Map</td>\n      <td>Top-down view of app architecture with health indicators.</td>\n    </tr>\n    <tr>\n      <td>Distributed Tracing</td>\n      <td>Search and visualize an end-to-end flow of a given execution or transaction.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Application Insights monitors various aspects of your application's performance and health. It collects Metrics and Telemetry data, including:</p>\n\n<ul>\n<li><strong>Request rates, response times, and failure rates</strong>: Identify popular pages, peak usage times, and user locations. Monitor page performance and detect resourcing issues during high request loads.</li>\n<li><strong>Dependency rates, response times, and failure rates</strong>: Check if external services are causing slowdowns.</li>\n<li><strong>Exceptions</strong>: Analyze aggregated statistics or specific instances, examining stack traces and related requests. Reports both server and browser exceptions.</li>\n<li><strong>Page views and load performance</strong>: Information reported by users' browsers.</li>\n<li><strong>AJAX calls</strong>: Monitor rates, response times, and failure rates for AJAX calls from web pages.</li>\n<li><strong>User and session counts</strong>: Keep track of user and session numbers.</li>\n<li><strong>Performance counters</strong>: Monitor CPU, memory, and network usage on Windows or Linux server machines.</li>\n<li><strong>Host diagnostics</strong>: Gather diagnostic information from Docker or Azure.</li>\n<li><strong>Diagnostic trace logs</strong>: Correlate trace events with requests by collecting logs from your app.</li>\n<li><strong>Custom events and metrics</strong>: Create your own events and metrics in the client or server code to track specific business events, such as items sold or games won.</li>\n</ul>\n\n<p>Here are various methods to start monitoring and analyzing your app's performance:</p>\n\n<ul>\n<li><strong>Run time</strong>: Use Application Insights with your web app on the server, which is great for already deployed apps and doesn't require code updates.</li>\n<li><strong>Development time</strong>: Add Application Insights into your code. This allows for customized telemetry collection and more extensive data collection.</li>\n<li><strong>Web page instrumentation</strong>: Track page views, AJAX, and other client-side activities.</li>\n<li><strong>Mobile app analysis</strong>: Use Visual Studio App Center to study mobile app usage.</li>\n<li><strong>Availability tests</strong>: Regularly ping your website from our servers to test availability.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 3
      },
      {
        "id": "section-2",
        "title": "Metrics",
        "content": "<strong>Log-based metrics</strong>: Offers thorough data analysis and diagnostics. ⭐: you need complete set of events ❌: high-volume apps that require sampling / filtering.\n\n<strong>Standard metrics</strong> are time-series data <strong>pre-aggregated</strong> by either SDK (version does not affect accuracy) or backend (better accuracy), optimized for fast queries. ⭐: dashboards and real-time alerts, use cases _requiring sampling or filtering_.\n\n<p>You can toggle between these metrics types using the metrics explorer's namespace selector.</p>\n\n<a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/reference/supported-metrics/metrics-index\" target=\"_blank\" rel=\"noopener noreferrer\">Supported Metrics</a>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Sampling",
        "content": "<p>Reduces data traffic and costs while keeping analysis accurate. Helps avoid data limits and makes diagnostics easier. High sampling rates (> 60%) can affect log-based accuracy. Pre-aggregated metrics in SDKs solve this issue, but too much filtering can miss alerts.</p>\n\n<ul>\n<li><strong>Adaptive sampling</strong>: On by default, adjusts data volume to stay within set limits. Used in Azure Functions.</li>\n<li><strong>Fixed-rate sampling</strong>: You set the rate manually. ⭐: syncing client and server data to investigations of related events.</li>\n<li><strong>Ingestion sampling</strong>: Discards some data at the service endpoint to stay within monthly limits. Doesn't reduce app traffic. Use if you hit monthly limits, or get too much data, or using older SDK.</li>\n</ul>\n\n<p>For web apps, to group custom events, use the same <code>OperationId</code> value.</p>\n\n<h4>Configuring sampling</h4>\n<p><pre><code class=\"language-cs\">var builder = TelemetryConfiguration.Active.DefaultTelemetrySink.TelemetryProcessorChainBuilder;\n\n// Enable AdaptiveSampling so as to keep overall telemetry volume to 5 items per second.\nbuilder.UseAdaptiveSampling(maxTelemetryItemsPerSecond:5);\n\n// Fixed rate sampling\nbuilder.UseSampling(10.0); // percentage\n\n// If you have other telemetry processors:\nbuilder.Use((next) =&gt; new AnotherProcessor(next));</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Custom events and metrics",
        "content": "<p>Use <a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/get-metric\" target=\"_blank\" rel=\"noopener noreferrer\"><code>GetMetric()</code></a> instead of <code>TrackMetric()</code>. <code>GetMetric()</code> handles <strong>pre-aggregation</strong>, reducing costs and performance issues associated with raw telemetry. It avoids sampling, ensuring reliable alerts. Tracking metrics at a granular level can lead to increased costs, network traffic, and throttling risks. <code>GetMetric()</code> solves these concerns by sending summarized data every minute.</p>\n<p><pre><code class=\"language-cs\">TelemetryConfiguration configuration = TelemetryConfiguration.CreateDefault();\nconfiguration.InstrumentationKey = &quot;your-instrumentation-key-here&quot;;\nvar telemetry = new TelemetryClient(configuration);\n\n// Set properties such as UserId and DeviceId to identify the machine.\n// This information is attached to all events that the instance sends.\ntelemetry.Context.User.Id = &quot;...&quot;;\ntelemetry.Context.Device.Id = &quot;...&quot;;\n\n// Monitors usage patterns and sends data to Custom Events for search.\n// It names events and includes string properties and numeric metrics.\ntelemetry.TrackEvent(&quot;WinGame&quot;);\n\n// GetMetric: capture locally pre-aggregated metrics for .NET and .NET Core applications\n\n// TrackMetric: not the preferred method for sending metrics, but can be used if you&#39;re implementing your own pre-aggregation logic\nvar sample = new MetricTelemetry();\nsample.Name = &quot;queueLength&quot;;\nsample.Sum = 42.3;\ntelemetry.TrackMetric(sample);\n\n// Track page views at more or different times\ntelemetry.TrackPageView(&quot;GameReviewPage&quot;);\n\n// Track the response times and success rates of calls to an external piece of code\nvar success = false;\nvar startTime = DateTime.UtcNow;\nvar timer = System.Diagnostics.Stopwatch.StartNew();\n\ntry\n{\n    // Some code that might throw an exception\n    success = true;\n}\ncatch (Exception ex)\n{\n    // Send exceptions to Application Insights\n    telemetry.TrackException(ex);\n\n    // Log exceptions to a diagnostic trace listener (Trace.aspx).\n    Trace.TraceError(ex.Message);\n}\nfinally\n{\n    timer.Stop();\n    // TrackDependency: Tracks the performance of external dependencies not automatically collected by the SDK.\n    // Use it to measure response times for databases, or external services.\n    // Send data to Dependency Tracking in Application Insights\n    telemetry.TrackDependency(&quot;DependencyType&quot;, &quot;myDependency&quot;, &quot;myCall&quot;, startTime, timer.Elapsed, success);\n}\n\n// Diagnose problems by sending a &quot;breadcrumb trail&quot; to Application Insights\n// Lets you send longer data such as POST information.\ntelemetry.TrackTrace(&quot;Some message&quot;, SeverityLevel.Warning);\n\n// Event log: use ILogger or a class inheriting EventSource.\n\n// Send data immediately, rather than waiting for the next fixed-interval sending\ntelemetry.Flush();</code></pre></p>\n<p>Read more: <a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/asp-net-dependencies\" target=\"_blank\" rel=\"noopener noreferrer\">Dependency tracking in Application Insights</a></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-5",
        "title": "Usage analysis",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-segmentation\" target=\"_blank\" rel=\"noopener noreferrer\">User, session, and event analysis</a></li>\n</ul>\n\n<ul>\n<li><strong>Users tool</strong>: Counts unique app users per browser/machine.</li>\n<li><strong>Sessions tool</strong>: Tracks feature usage per session; resets after 30min inactivity or 24hr use.</li>\n<li><strong>Events tool</strong>: Measures page views and custom events like clicks.</li>\n</ul>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-funnels\" target=\"_blank\" rel=\"noopener noreferrer\">Funnels</a>: For linear, step-by-step processes. Track how users move through different stages of your web application, for example how many users go from the home page to creating a ticket. Use funnels to identify where users may stop or leave your app, helping you understand its effective areas and where improvements are needed.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-flows\" target=\"_blank\" rel=\"noopener noreferrer\">User Flows</a>: For understanding complex, branching user behavior. Helps you analyze how users navigate between pages and features of your web app. It can answer questions like where users go after visiting a page, where they leave your site, or if they repeat the same action many times.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-cohorts\" target=\"_blank\" rel=\"noopener noreferrer\">Cohorts</a>: Group and analyze sets of users, sessions, events, or operations that have something in common. For example, you might make a cohort of users who all tried a new feature.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-impact\" target=\"_blank\" rel=\"noopener noreferrer\">Impact</a>: Helps you understand how different factors like load times and user properties influence conversion rates in various parts of your app.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-retention\" target=\"_blank\" rel=\"noopener noreferrer\">Retention</a>: Helps you understand how many users come back to your app and how often they engage with specific tasks or goals. For example, if you have a game site, you can see how many users return after winning or losing a game.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-6",
        "title": "Monitor an app (Instrumentation)",
        "content": "<ul>\n<li><strong>Auto instrumentation</strong>: Telemetry collection through configuration without modifying the application's code or configuring instrumentation.</li>\n<li><strong>Manual Instrumentation</strong>: Coding against the <strong>Application Insights</strong> or <strong>OpenTelemetry</strong> API. Supports <strong>Entra ID</strong> and <strong>Complex Tracing</strong> (collect data that is not available in Application Insights)</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Availability test",
        "content": "<p>Up to 100 tests per Application Insights resource.</p>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/monitor-web-app-availability\" target=\"_blank\" rel=\"noopener noreferrer\">URL ping test (classic - to be retired September 2026)</a>: Check endpoint response and measure performance. Customize success criteria with advanced features like parsing dependent requests and retries. It relies on public internet DNS; ensure public domain name servers resolve all test domain names. Use custom <strong>TrackAvailability</strong> tests otherwise.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-standard-tests\" target=\"_blank\" rel=\"noopener noreferrer\">Standard test</a>: Similar to URL ping, this single request test covers SSL certificate validity, proactive lifetime check, HTTP request verb (<code>GET</code>, <code>HEAD</code>, or <code>POST</code>), custom headers, and associated data.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-azure-functions\" target=\"_blank\" rel=\"noopener noreferrer\">Custom TrackAvailability test</a>: Use <a href=\"https://learn.microsoft.com/en-us/dotnet/api/microsoft.applicationinsights.telemetryclient.trackavailability\" target=\"_blank\" rel=\"noopener noreferrer\">TrackAvailability()</a> method to send results to Application Insights. Ideal for <code>multi-request</code> or <code>authentication</code> test scenarios. (Note: Multi-step test are the legacy version; To create multi-step tests, use Visual Studio)</li>\n</ul>\n\n<p>Example: Create an alert that will notify you via email if the web app becomes unresponsive:</p>\n\n<code>Portal > Application Insights resource > Availability > Add Test option > Rules (Alerts) > set action group for availability alert > Configure notifications (email, SMS)</code>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Troubleshoot app performance by using Application Map",
        "content": "<p>Application Map visualizes application topology and how components interact via HTTP dependencies. It's built from telemetry sent by the Application Insights SDK or OpenTelemetry.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Key Requirements",
        "content": "<ul>\n<li>Use a <strong>single Application Insights resource</strong> (not just the same subscription) to see all components on a single map.</li>\n<li>Components are grouped by their <code>cloud_RoleName</code> value. To <strong>customize component names</strong>, override the it using:</li>\n<li>Classic SDK: <code>cloud_RoleName</code></li>\n<li>OpenTelemetry: <code>service.name</code> + <code>service.namespace</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Containerized Services with OpenTelemetry",
        "content": "<p>In microservices or containerized environments, use <strong>OpenTelemetry Resource attributes</strong> to define component identity.</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>OTel Attribute</th>\n      <th>Maps To in App Insights</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>service.name</code></td>\n      <td>Logical service name</td>\n      <td><code>orders-api</code></td>\n    </tr>\n    <tr>\n      <td><code>service.namespace</code></td>\n      <td>Component grouping</td>\n      <td><code>ecommerce-platform</code></td>\n    </tr>\n    <tr>\n      <td><code>service.instance.id</code></td>\n      <td>Unique service instance ID</td>\n      <td><code>instance-01</code></td>\n    </tr>\n  </tbody>\n</table>\n\n<p>These values are translated internally by Azure Monitor:</p>\n\n<ul>\n<li><code>cloud_RoleName</code> = <code>service.namespace</code>.<code>service.name</code></li>\n<li><code>cloud_RoleInstance</code> = <code>service.instance.id</code> (if provided)</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Application Map Integration with OpenTelemetry",
        "content": "<p>To properly render all services in Application Map:</p>\n\n<ul>\n<li>All components <strong>must send telemetry to the same Application Insights resource</strong>.</li>\n<li>Each component <strong>must set a distinct <code>cloud_RoleName</code></strong> (via <code>service.name</code> and <code>service.namespace</code>).</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Monitor a local web API by using Application Insights",
        "content": "<p><pre><code class=\"language-cs\">// This forces HTTPS\nbuilder.Services.AddApplicationInsightsTelemetry();\nbuilder.Services.AddServiceProfiler();</code></pre></p>\n<p>appsettings.json:</p>\n<p><pre><code class=\"language-jsonc\">&quot;ApplicationInsights&quot;: {\n  // Needed to send telemetry data to Application Insights\n  &quot;InstrumentationKey&quot;: &quot;instrumentation-key&quot;\n}</code></pre></p>\n<p>Trust local certificates: <code>dotnet dev-certs https --trust</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Azure Monitor",
        "content": "<ul>\n<li>Azure Monitor: Infrastructure and multi-resource monitoring, including hybrid and multi-cloud environments.</li>\n<li>Application Insights: Application-level monitoring (application performance management - APM), especially for web apps and services.</li>\n</ul>\n\n<p>Application Insights data can also be viewed in Azure Monitor for a centralized experience.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Activity Log",
        "content": "<p>Records subscription-level events, such as modifications to resources or starting a virtual machine.</p>\n\n<strong>Diagnostic Settings</strong>: Allows sending the activity log to different locations:\n\n<ul>\n<li><strong>Log Analytics workspace</strong>: Utilize log queries for deep insights (_Kusto queries_) and complex alerting. By default events are retained for 90 days, but you can create a diagnostic setting for longer retention.</li>\n<li><strong>Azure Storage account</strong>: For audit, static analysis, or backup. Less expensive, and logs can be kept there indefinitely.</li>\n<li><strong>Azure Event Hubs</strong>: Stream data to external systems such as third-party SIEMs and other Log Analytics solutions.</li>\n</ul>\n\n<p>NOTE: <code>az monitor activity-log</code> _cannot_ display data from Application Insight telemetry!</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Connection string",
        "content": "<p>From env var <code>APPLICATIONINSIGHTS_CONNECTION_STRING</code>. Controls where telemetry is sent.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "Service Bus Queue",
        "content": "<ul>\n<li><strong>Message Count</strong>: The number of messages currently in the queue.</li>\n<li><strong>Active Message Count</strong>: The number of active messages in the queue.</li>\n<li><strong>Dead-letter Message Count</strong>: The number of messages that have been moved to the dead-letter queue.</li>\n<li><strong>Scheduled Message Count</strong>: The number of messages that are scheduled to appear in the queue at a future time.</li>\n<li><strong>Transfer Message Count</strong>: The number of messages transferred to another queue or topic.</li>\n<li><strong>Transfer Dead-letter Message Count</strong>: The number of messages transferred to the dead-letter queue for another queue or topic.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-17",
        "title": "Azure Blob Storage",
        "content": "<ul>\n<li><strong>Blob Count</strong>: Number of blobs in a container.</li>\n<li><strong>Blob Size</strong>: Total size of blobs in a container.</li>\n<li><strong>Egress</strong>: Data egress rate.</li>\n<li><strong>Ingress</strong>: Data ingress rate.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-18",
        "title": "Azure Event Hub",
        "content": "<ul>\n<li><strong>Incoming Messages</strong>: Number of messages received.</li>\n<li><strong>Outgoing Messages</strong>: Number of messages sent.</li>\n<li><strong>Capture Backlog</strong>: Number of messages waiting to be captured.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-19",
        "title": "Custom Metrics",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>OTel Instrument</th>\n      <th>Azure Aggregation Type</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>Counter</code> / <code>AsyncCounter</code></td>\n      <td>Sum</td>\n    </tr>\n    <tr>\n      <td><code>UpDownCounter</code></td>\n      <td>Sum</td>\n    </tr>\n    <tr>\n      <td><code>Histogram</code></td>\n      <td>Min, Max, Avg, Sum, Count</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Histogram - closest to <code>GetMetric()</code> from classic SDK</p>\n\n<h4>Examples</h4>\n<p><pre><code class=\"language-csharp\">var meter = new Meter(&quot;MyApp.Metrics&quot;);\n\nvar histogram = meter.CreateHistogram&lt;long&gt;(&quot;response_time_ms&quot;);\n// Record a few random sale prices for apples and lemons, with different colors.\nhistogram.Record(rand.Next(1, 1000), new(&quot;name&quot;, &quot;apple&quot;), new(&quot;color&quot;, &quot;red&quot;));\n\nvar counter = meter.CreateCounter&lt;long&gt;(&quot;MyFruitCounter&quot;);\n// Record the number of fruits sold, grouped by name and color.\ncounter.Add(1, new(&quot;name&quot;, &quot;apple&quot;), new(&quot;color&quot;, &quot;red&quot;));</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Span Mapping to Application Insights",
        "content": "<p>Azure Monitor uses the type of <strong>OpenTelemetry span</strong> to determine how to classify telemetry in Application Insights. This classification happens <strong>automatically</strong> when OpenTelemetry telemetry is exported to Application Insights.</p>\n\n<h4>Span Kind → Application Insights Type</h4>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>OpenTelemetry Span Kind</th>\n      <th>Application Insights Equivalent</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>Server</code></td>\n      <td><strong>Request</strong></td>\n      <td>Represents an incoming HTTP request</td>\n    </tr>\n    <tr>\n      <td><code>Client</code></td>\n      <td><strong>Dependency</strong></td>\n      <td>Represents an outgoing call to a service/API</td>\n    </tr>\n    <tr>\n      <td><code>Producer</code></td>\n      <td><strong>Dependency</strong></td>\n      <td>Used for messaging or queuing operations</td>\n    </tr>\n    <tr>\n      <td><code>Consumer</code></td>\n      <td><strong>Request</strong></td>\n      <td>When receiving a message</td>\n    </tr>\n    <tr>\n      <td><code>Internal</code></td>\n      <td><strong>Custom Event / Custom Operation</strong></td>\n      <td>Custom telemetry (non-HTTP or system-internal)</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Practical Examples:</p>\n\n<ul>\n<li>You call a third-party REST API → OpenTelemetry uses a <code>Client Span</code> → Application Insights logs a <strong>Dependency</strong></li>\n<li>Your API receives a request → <code>Server Span</code> → logged as a <strong>Request</strong></li>\n<li>Your app posts to Azure Service Bus → <code>Producer Span</code> → logged as a <strong>Dependency</strong></li>\n<li>Your background worker consumes from a queue → <code>Consumer Span</code> → logged as a <strong>Request</strong></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "Filtering",
        "content": "<ul>\n<li>Remove noise (e.g. health checks)</li>\n<li>Drop sensitive data (PII, credentials)</li>\n<li>Improve performance by excluding low-value traces</li>\n</ul>\n<p><pre><code class=\"language-csharp\">// Via Instrumentation\nbuilder.Services.AddOpenTelemetry().UseAzureMonitor().WithTracing(builder =&gt; builder.AddSqlClientInstrumentation(options =&gt; {\n  options.SetDbStatementForStoredProcedure = false;\n}));\n\n// Via custom span processor\npublic class ActivityFilteringProcessor : BaseProcessor&lt;Activity&gt;\n{\n    public override void OnStart(Activity activity)\n    {\n        // Drop all internal spans\n        if (activity.Kind == ActivityKind.Internal)\n            activity.IsAllDataRequested = false;\n    }\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Blob Storage",
      "Entra ID",
      "Event Hub",
      "Events"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/supported-metrics/metrics-index",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "azure-portal",
    "topic": "azure-portal",
    "title": "Azure Portal",
    "description": "Comprehensive guide to Azure Portal in Microsoft Azure platform",
    "difficulty": "Intermediate",
    "estimatedReadTime": 3,
    "tags": [
      "Portal",
      "Security",
      "RBAC",
      "Storage",
      "storage",
      "networking"
    ],
    "learningObjectives": [
      "Update to v2: `storage account > Settings > Configuration > Account kind > Upgrade`",
      "Redundancy: `storage account > Data management > Redundancy`",
      "Increase DNS zone quota: `Azure Portal > Quotas > Storage > <subscription> > <region> > Request increase`"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Storage Account",
        "content": "<ul>\n<li>Update to v2: <code>storage account > Settings > Configuration > Account kind > Upgrade</code></li>\n<li>Creating a new policy: <code>storage account > Data management > Lifecycle management > List view > Add rule > fill out the Action set form fields > add an optional filter</code></li>\n<li>Redundancy: <code>storage account > Data management > Redundancy</code></li>\n<li>Increase DNS zone quota: <code>Azure Portal > Quotas > Storage > <subscription> > <region> > Request increase</code></li>\n<li>Initialize failover: <code>storage account > Settings > Geo-replication > Prepare for failover</code></li>\n<li>Toggle Static website: <code>storage account > Static Website</code></li>\n<li>Static website address: <code>Settings > Endpoints > Static website</code></li>\n<li>Get Account Access Key: <code>storage account > Security + networking > Access keys</code></li>\n<li>Create encryption scope: <code>Azure portal >  Security + networking > Encryption > Encryption Scopes tab > Add</code> (can be selected under \"Advanced Settings\" for new blobs/containers)</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Security",
        "content": "<ul>\n<li>RBAC: <code>Azure Portal > Access control (IAM)</code></li>\n<li>Configure the target resource to allow access from your app or function: <code>Azure Portal <Settings > Access policies > Add Access Policy</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Containers"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "blob-storage",
    "topic": "blob-storage",
    "title": "Azure Blob Storage",
    "description": "Endpoint: https://<storage-account>.blob.core.windows.net/<container>/<blob> - Serving images or documents directly to a browser. - Storing files for distributed access.",
    "difficulty": "Beginner",
    "estimatedReadTime": 63,
    "tags": [
      "Blob Storage",
      "blob storage",
      "Key Vault",
      "Blob storage",
      "rest",
      "Cli"
    ],
    "learningObjectives": [
      "Serving images or documents directly to a browser.",
      "Storing files for distributed access.",
      "Streaming video and audio."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Understanding of data storage and database concepts",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Endpoint: <code>https://<storage-account>.blob.core.windows.net/<container>/<blob></code></p>\n\n<ul>\n<li>Serving images or documents directly to a browser.</li>\n<li>Storing files for distributed access.</li>\n<li>Streaming video and audio.</li>\n<li>Writing to log files.</li>\n<li>Storing data for backup and restore, disaster recovery, and archiving.</li>\n<li>Storing data for analysis by an on-premises or Azure-hosted service.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Types of resources",
        "content": "<p>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/media/storage-blobs-introduction/blob1.png\" target=\"_blank\" rel=\"noopener noreferrer\">Diagram showing the relationship between a storage account, containers, and blobs</a></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Storage Account",
        "content": "<p><pre><code class=\"language-sh\">az storage account create\n    --name # valid DNS name, 3-24 chars\n    --resource-group\n\n# Pricing tiers (&lt;Type&gt;_&lt;Redundancy&gt;)\n# Changing type: Copy to another account.\n# Changing redundancy: Instantly applied\n    [--sku {Standard_GRS, Standard_GZRS, Standard_LRS, Standard_RAGRS, Standard_ZRS, Standard_RAGZRS, Premium_LRS, Premium_ZRS}]\n# Type 🧊:\n# - Standard: ⏺️⭐\n# - Premium: ⚡💲 (SSD). ⭐: using smaller objects\n# Redundancy:\n# - LRS: 🏷️, ❌: 🙋‍♂️.\n#   ⭐: your application can reconstruct lost data, requires regional replication (perhaps due to governance reasons), or uses Azure unmanaged disks.\n# - ZRS: Data write operations are confirmed successful once all the available zones have received the data. This even includes zones that are temporarily unavailable.\n#   ⭐: 🙋‍♂️, regional data replication, Azure Files workloads.\n# - GRS: LRS + async copy to a secondary region.\n# - GZRS: ZRS + async copy to a secondary region. 🦺\n# Read Access (RA): 🙋‍♂️ Allow read-only from `https://{accountName}-secondary.&lt;url&gt;`\n# Failover: manually initialized, swaps primary and secondary regions.\n# - C#: BlobClientOptions.GeoRedundantSecondaryUri (will not attempt again if 404).\n# - Alt: Copy data.\n# - ❌: Azure Files, BlockBlobStorage\n\n    [--access-tier {Cool, Hot, Premium}] # Premium is inherited by SKU\n\n    [--kind {BlobStorage, BlockBlobStorage, FileStorage, Storage, StorageV2}]\n# - BlobStorage: Simple blob-only scenarios.\n# - BlockBlobStorage: ⚡💎\n# - FileStorage: High-scale or high IOPS file shares. 💎\n# - Storage (General-purpose v1): Legacy. ⭐: classic deployment model or 🏋🏿 apps\n# - StorageV2: ⏺️⭐\n\n    [--dns-endpoint-type {AzureDnsZone, Standard}] # Requires storage-preview extension\n# In one subscription, you can have accounts with both\n# - Standard: 250 accounts (500 with quota increase)\n# - AzureDnsZone: 5000 accounts\n# https://&lt;storage-account&gt;.z[00-50].&lt;storage-service&gt;.core.windows.net\n# Retrieve endpoints: GET https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}?api-version=2022-09-01\n\n    [--enable-hierarchical-namespace {false, true}]\n# Filesystem semantics. StorageV2 only. ❌ failover</code></pre></p>\n<p>Redundancy:</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>LRS</th>\n      <th>ZRS</th>\n      <th>GRS</th>\n      <th>GZRS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/common/media/storage-redundancy/locally-redundant-storage.png\" target=\"_blank\" rel=\"noopener noreferrer\">LRS</a></td>\n      <td>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/common/media/storage-redundancy/zone-redundant-storage.png\" target=\"_blank\" rel=\"noopener noreferrer\">ZRS</a></td>\n      <td>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/common/media/storage-redundancy/geo-redundant-storage.png\" target=\"_blank\" rel=\"noopener noreferrer\">GRS</a></td>\n      <td>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/common/media/storage-redundancy/geo-zone-redundant-storage.png\" target=\"_blank\" rel=\"noopener noreferrer\">GZRS</a></td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Pricing: ⏫ is not charged.</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-4",
        "title": "Container",
        "content": "<p>Organizes a set of blobs, similar to a directory in a file system. A storage account can include an unlimited number of containers, and a container can store an unlimited number of blobs.</p>\n<p><pre><code class=\"language-sh\">az storage container create\n    --name # Valid lowercase DNS name (3-63) with no double dashes\n    [--resource-group]\n    [--metadata]\n    [--public-access {blob, container, off}]</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Blob",
        "content": "<p>Each version of the blob has a unique tag, called an <code>ETag</code> that allows to only change a specific instance of the blob. Set type: <code>--type {block, append, page}</code></p>\n\n<ul>\n<li><strong>Block blobs</strong>: Store text and binary data in individual blocks, with a capacity of up to 190.7 TiB. <code>PUT <url>?comp=block&blockid=id</code></li>\n</ul>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-append\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Append Blobs</strong></a>: ⭐: append operations (ex: logging data from virtual machines). <code>PUT <url>?comp=appendblock</code>. <code>Add</code> permission is only applicable to this type of blob.</li>\n</ul>\n\n<p><pre><code class=\"language-cs\">AppendBlobClient appendBlobClient = containerClient.GetAppendBlobClient(logBlobName);\n  // Read appendBlobClient.AppendBlobMaxAppendBlockBytes bytes of data\n  await appendBlobClient.AppendBlockAsync(memoryStream);</code></pre></p>\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-pageblob-overview\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Page blobs</strong></a>: Stores random access files up to 8 TiB. ⭐: VHD files, disks for Azure virtual machines, or databseses. <code>PUT <url>?comp=page</code></li>\n</ul>\n\n<p>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/media/storage-blob-pageblob-overview/storage-blob-pageblob-overview-figure2.png\" target=\"_blank\" rel=\"noopener noreferrer\">A diagram showing the two separate write options.</a></p>\n\n<p><pre><code class=\"language-cs\">var pageBlobClient = blobContainerClient.GetPageBlobClient(&quot;0s4.vhd&quot;);\n  pageBlobClient.Create(16 * 1024 * 1024 * 1024 /* 1GB */); // create an empty page blob of a specified size\n  pageBlobClient.Resize(32 * 1024 * 1024 * 1024); // resize a page blob\n  pageBlobClient.UploadPages(dataStream, startingOffset); // write pages to a page blob\n  var pageBlob = pageBlobClient.Download(new HttpRange(bufferOffset, rangeSize)); // read pages from a page blob</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Access tiers",
        "content": "<p><pre><code class=\"language-sh\"># Account level\naz storage account create --access-tier {Cool, Hot, Premium} # Premium is inherited by SKU\n\n# Individual blob level\naz storage blob set-tier\n    --tier {Archive, Cool, Hot}\n\n    [--rehydrate-priority {Standard, High}] # For archived objects &lt; 10GB, 1-15 hours\n# Can be checked by `x-ms-rehydrate-priority` header.\n\n    [--type {block, page}] # append is considered always &quot;hot&quot;</code></pre></p>\n<ul>\n<li>Hot: Frequently accessed or modified data. ⚡💲</li>\n<li>Not-hot: Infrequently accessed or modified data (ex: short-term data backup and disaster recovery). Penalty for early removal of data. 🏷️</li>\n<li>Archive: Only for individual blob blocks. 🐌. _Offline_ (requires rehydration to be accessed, at least an hour). To access data, either <a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview#copy-an-archived-blob-to-an-online-tier\" target=\"_blank\" rel=\"noopener noreferrer\">copy</a> or <a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview#change-a-blobs-access-tier-to-an-online-tier\" target=\"_blank\" rel=\"noopener noreferrer\">change</a> data to online tier. Rehydration copy to a different account is supported if the other account is within the same region. Destination cannot be at archive tier. ❌: \\*ZRS redundancy.</li>\n<li>Non-archive: _Online_ (can be accessed at any time). ❌: append blobs. ⚡</li>\n</ul>\n\n<p>Min retention period (in days): 30 (Cool), 90 (Cold), Archive (180). To avoid penalty, choose a tier with less than required days.</p>\n\n<p>Changing a blob's tier leaves its last modified time untouched. If a lifecycle policy is active, using <strong>Set Blob Tier</strong> to rehydrate may cause the blob to return to the archive tier if the last modified time exceeds the policy's threshold.</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-7",
        "title": "Lifecycle policies",
        "content": "<code>General Purpose v2</code> only.\n<p>❌: <code>$logs</code> or <code>$web</code> containers</p>\n\n<ul>\n<li>Transition blobs to a cooler storage tier for 🏷️</li>\n<li>Delete blobs at the end of their lifecycles</li>\n<li>Define rules to be run once per day at the storage account level</li>\n<li>Apply rules to containers or a subset of blobs (using prefixes as filters)</li>\n</ul>\n<p><pre><code class=\"language-sh\">az storage account management-policy create \\\n#--account-name &quot;&lt;storage-account&gt;&quot; \\\n#--resource-group $resourceGroup\n    --policy @policy.json \\</code></pre></p>\n<p><pre><code class=\"language-ts\">type RelesType = {\n  rules: [\n    {\n      enabled: boolean;\n      name: string;\n      type: &quot;Lifecycle&quot;;\n      definition: {\n        actions: {\n          // NOTE: Delete is the only action available for all blob types; snapshots cannot auto set to hot\n          version?: RuleAction;\n          /* blobBlock */ baseBlob?: RuleAction;\n          snapshopt?: Omit&lt;RuleAction, &quot;enableAutoTierToHotFromCool&quot;&gt;;\n          appendBlob?: { delete: ActionRunCondition }; // only one lifecycle policy\n        };\n        filters?: {\n          blobTypes: Array&lt;&quot;appendBlob&quot; | &quot;blockBlob&quot;&gt;;\n          // A prefix string must start with a container name.\n          // To match the container or blob name exactly, include the trailing forward slash (&#39;/&#39;), e.g., &#39;sample-container/&#39; or &#39;sample-container/blob1/&#39;\n          // To match the container or blob name pattern (wildcard), omit the trailing forward slash, e.g., &#39;sample-container&#39; or &#39;sample-container/blob1&#39;\n          prefixMatch?: string[];\n          // Each rule can define up to 10 blob index tag conditions.\n          // example, if you want to match all blobs with `Project = Contoso``: `{&quot;name&quot;: &quot;Project&quot;,&quot;op&quot;: &quot;==&quot;,&quot;value&quot;: &quot;Contoso&quot;}``\n          // https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs?tabs=azure-portal\n          blobIndexMatch?: Record&lt;string, string&gt;;\n        };\n      };\n    }\n  ];\n};\n\ntype RuleAction = {\n  tierToCool?: ActionRunCondition;\n  tierToArchive?: {\n    daysAfterModificationGreaterThan: number;\n    daysAfterLastTierChangeGreaterThan: number;\n  };\n  enableAutoTierToHotFromCool?: ActionRunCondition;\n  delete?: ActionRunCondition;\n};\n\ntype ActionRunCondition = {\n  daysAfterModificationGreaterThan: number;\n  daysAfterCreationGreaterThan: number;\n  daysAfterLastAccessTimeGreaterThan: number; // requires last access time tracking\n};</code></pre></p>\n<p>It takes _up to 24 hours to go into effect_. Then it could take additional _up to 24 hours_ for some actions to run for the first time.</p>\n\n<p>Data stored in a premium block blob storage account cannot be tiered to Hot, Cool, or Archive using Set Blob Tier or using Azure Blob Storage lifecycle management.</p>\n\n<p>If you define more than one action on the same blob, lifecycle management applies the least 💲 action to the blob: <code>delete < tierToArchive < tierToCool</code>.</p>\n\n<p>❌: partial updates</p>\n\n<p>Access time tracking: when is enabled (<code>az storage account blob-service-properties update --enable-last-access-tracking true</code>), a lifecycle management policy can include an action based on the time that the blob was last accessed with a read (tracks only the first in the past 24 hours) or write operation. 💲</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-8",
        "title": "Transient error handling (retry strategy)",
        "content": "<p><pre><code class=\"language-cs\">var options = new BlobClientOptions();\noptions.Retry.MaxRetries = 10;\nopions.Retry.Delay = TimeSpan.FromSeconds(20);\nvar client = new BlobClient(new Uri(&quot;...&quot;), options);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Data Protection",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/snapshots-overview\" target=\"_blank\" rel=\"noopener noreferrer\">Snapshots</a></th>\n      <th><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview\" target=\"_blank\" rel=\"noopener noreferrer\">Versioning</a></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Creation</td>\n      <td>Manually</td>\n      <td>Automatically (when enbled)</td>\n    </tr>\n    <tr>\n      <td>Immutability</td>\n      <td>Read-only once created.</td>\n      <td>Previous versions are read-only.</td>\n    </tr>\n    <tr>\n      <td>URI</td>\n      <td>DateTime value appended to base blob URI.</td>\n      <td>Unique version ID for each version.</td>\n    </tr>\n    <tr>\n      <td>Flexibility</td>\n      <td>More manual control, suitable for point-in-time backups.</td>\n      <td>Easier to manage, better for frequent changes.</td>\n    </tr>\n    <tr>\n      <td>Tiers</td>\n      <td>Not in Archive.</td>\n      <td>All.</td>\n    </tr>\n    <tr>\n      <td>Deletion</td>\n      <td>Must be deleted explicitly or with the base blob.</td>\n      <td>Automatically managed; older versions can be deleted based on policies.</td>\n    </tr>\n    <tr>\n      <td>Soft Delete Impact</td>\n      <td>Soft-deleted along with the base blob; can be recovered during retention period.</td>\n      <td>Current version becomes a previous version, and there's no longer a current version</td>\n    </tr>\n  </tbody>\n</table>\n<p><pre><code class=\"language-cs\">BlobSnapshotInfo snapshotInfo = await blobClient.CreateSnapshotAsync();\n// If you attempt to delete a blob that has snapshots, the operation will fail unless you explicitly specify that you also want to delete the snapshots\nawait blobClient.DeleteIfExistsAsync(DeleteSnapshotsOption.IncludeSnapshots);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Leasing",
        "content": "<p>Provides temporary exclusive write access to a Blob for a certain client with a lease key. Modifying the lease also requires that key (else <code>412 – Precondition failed</code> error)</p>\n<p><pre><code class=\"language-sh\">leaseId=$(az storage blob lease acquire --lease-duration 60 --output tsv ...)\naz storage blob lease {renew, change, release, break}</code></pre></p>\n<p><pre><code class=\"language-cs\">// Acquire a lease on the blob\nstring proposedLeaseId = Guid.NewGuid().ToString();\nvar leaseClient = blobClient.GetBlobLeaseClient(proposedLeaseId);\nvar lease = leaseClient.Acquire(TimeSpan.FromSeconds(15));\n// leaseClient.Renew();\n// leaseClient.Change(newLeaseId); // change the ID of an existing lease\n// leaseClient.Release();\n// leaseClient.Break(); // end the lease, but ensure that another client can&#39;t acquire a new lease until the current lease period has expired\n\n// proposedLeaseId can now be passed as option in order to work with the blob\nBlobUploadOptions uploadOptions = new BlobUploadOptions { Conditions = new BlobRequestConditions { LeaseId = proposedLeaseId } };\nusing (var stream = new MemoryStream(Encoding.UTF8.GetBytes(&quot;New content&quot;)));\nawait blobClient.UploadAsync(stream, uploadOptions);\n\nBlobRequestConditions conditions = new BlobRequestConditions { LeaseId = proposedLeaseId };\nawait blobClient.SetMetadataAsync(newMetadata, conditions);</code></pre></p>\n<p><pre><code class=\"language-http\">PUT https://myaccount.blob.core.windows.net/mycontainer/myblob?comp=lease\n\nRequest Headers:\nx-ms-version: 2015-02-21\nx-ms-lease-action: acquire\nx-ms-lease-duration: -1 # In seconds. -1 is infinite\nx-ms-proposed-lease-id: 1f812371-a41d-49e6-b123-f4b542e851c5\nx-ms-date: &lt;date&gt;\n...\n\n# Working with leased blob\nPUT https://myaccount.blob.core.windows.net/mycontainer/myblob?comp=metadata\n\nRequest Headers:\nx-ms-meta-name:string-value\nx-ms-lease-id:[lease_id]</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Encryption",
        "content": "<p>Data in Azure Storage is encrypted and decrypted transparently using 256-bit AES encryption (similar to BitLocker). Enforced for all tiers. Object metadata is also encrypted.</p>\n\n<ul>\n<li><strong>Microsoft Keys</strong>: 🙂 All operations handled by Azure, supporting all services. Keys are stored by Microsoft, who also handles rotation and access.</li>\n<li><strong>Customer-Managed Keys</strong>: Handled by Azure but you have more control. Supports some services, stored in Azure Key Vault. You handle key rotation and both you and Microsoft can access.</li>\n</ul>\n<p>!<a href=\"https://learn.microsoft.com/en-us/azure/storage/common/media/customer-managed-keys-overview/encryption-customer-managed-keys-diagram.png\" target=\"_blank\" rel=\"noopener noreferrer\">Diagram showing how customer-managed keys work in Azure Storage </a></p>\n<ul>\n<li><strong>Customer-Provided Keys</strong>: Even more control, mainly for Blob storage. Can be stored in Azure or elsewhere, and you're responsible for key rotation. Only you can access.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Storage Account encryption",
        "content": "<p><pre><code class=\"language-sh\">az storage account &lt;create/update&gt;\n    [--encryption-key-source {Microsoft.Keyvault, Microsoft.Storage}]\n    [--encryption-services {blob, file, queue, table}] # queue / table with customer-managed keys = 💲\n    [--encryption-key-type-for-queue {Account, Service}]\n    [--encryption-key-type-for-table {Account, Service}]\n# When using Microsoft.Keyvault:\n#   [--encryption-key-name]\n#   [--encryption-key-vault] # URL\n#   [--encryption-key-version]\n\n# 🧊 Optionally encrypt infrastructure with separate Microsoft managed key. StorageV2 or BlockBlobStorage only.\n    [--require-infrastructure-encryption {false, true}] # false</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Container / Blob encryption (Encryption Scope)",
        "content": "<p><pre><code class=\"language-sh\">az storage account encryption-scope create\n    --account-name\n    --name &quot;&lt;scope-name&gt;&quot;\n    [--key-source {Microsoft.KeyVault, Microsoft.Storage}] # Same rules like encryption at account level\n    [--key-uri] # For KeyVault\n    [--require-infrastructure-encryption {false, true}] # Inherited from storage account level, if set\n\n# Optional\naz storage container create\n    --default-encryption-scope &quot;&lt;scope-name&gt;&quot;\n    --prevent-encryption-scope-override true # force all blobs in a container to use the container&#39;s default scope\n\naz storage &lt;type&gt; &lt;operation&gt;\n    --encryption-scope &quot;&lt;scope-name&gt;&quot; # if not set, inherited from container or storage account\n# EncryptionScope property for BlobOptions in C#</code></pre></p>\n<p>Encryption makes Access tier 🧊.</p>\n\n<p>Using disabled encryption scope will result in <code>403 Forbidden</code>.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Client Side Encryption",
        "content": "<p><pre><code class=\"language-cs\">// Your key and key resolver instances, either through Azure Key Vault SDK or an external implementation.\nIKeyEncryptionKey key;\nIKeyEncryptionKeyResolver keyResolver;\n\n// Create the encryption options to be used for upload and download.\nvar encryptionOptions = new ClientSideEncryptionOptions(ClientSideEncryptionVersion.V2_0)\n{\n    KeyEncryptionKey = key,\n    KeyResolver = keyResolver,\n    // String value that the client library will use when calling IKeyEncryptionKey.WrapKey()\n    KeyWrapAlgorithm = &quot;some algorithm name&quot;\n};\n\n// Set the encryption options on the client options.\nvar options = new SpecializedBlobClientOptions() { ClientSideEncryption = encryptionOptions };\n// pass options to BlobServiceClient instance</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Properties and metadata",
        "content": "<p>Metadata name/value pairs are valid HTTP headers, and so should adhere to all restrictions governing HTTP headers. Metadata names must be valid HTTP header names and valid C# identifiers, may contain only ASCII characters, and should be treated as case-insensitive.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "Manage container properties and metadata by using .NET",
        "content": "<p>Blob containers support system properties and user-defined metadata, in addition to the data they contain. Metadata values containing non-ASCII characters should be Base64-encoded or URL-encoded.</p>\n\n<ul>\n<li><strong>System properties</strong>: System properties exist on each Blob storage resource. Some of them can be read or set, while others are read-only. Under the covers, some system properties correspond to certain standard HTTP headers.</li>\n<li><strong>User-defined metadata</strong>: For your own purposes only, and do not affect how the resource behaves.</li>\n</ul>\n<p><pre><code class=\"language-cs\">/// &lt;exception cref=&quot;RequestFailedException&quot;&gt;Thrown if a failure occurs.&lt;/exception&gt;\nTask&lt;Azure.Response&lt;BlobContainerProperties&gt;&gt; GetPropertiesAsync (BlobRequestConditions conditions = default, CancellationToken cancellationToken = default);\n\n/// &lt;exception cref=&quot;RequestFailedException&quot;&gt;Thrown if a failure occurs.&lt;/exception&gt;\nTask&lt;Azure.Response&lt;BlobContainerInfo&gt;&gt; SetMetadataAsync (IDictionary&lt;string,string&gt; metadata, BlobRequestConditions conditions = default, CancellationToken cancellationToken = default);</code></pre></p>\n<p>If two or more metadata headers with the same name are submitted for a resource, Blob storage comma-separates and concatenates the two values and returns HTTP response code <code>200 (OK)</code> (Note: Rest cannot do that!)</p>\n\n<p>Example:</p>\n<p><pre><code class=\"language-csharp\">// Fetch some container properties and write out their values.\nvar properties = await container.GetPropertiesAsync();\nConsole.WriteLine(__CODEBLOCK_1__quot;Properties for container {container.Uri}&quot;);\nConsole.WriteLine(__CODEBLOCK_1__quot;Public access level: {properties.Value.PublicAccess}&quot;);\nConsole.WriteLine(__CODEBLOCK_1__quot;Last modified time in UTC: {properties.Value.LastModified}&quot;);\n\nvar metadata = new Dictionary&lt;string, string&gt;() { { &quot;docType&quot;, &quot;textDocuments&quot; }, { &quot;category&quot;, &quot;guidance&quot; } };\nvar containerInfo = await container.SetMetadataAsync(metadata); // ETag, LastModified</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-17",
        "title": "Set and retrieve properties and metadata for blob resources by using REST",
        "content": "<p>Endpoint templates:</p>\n\n<ul>\n<li>Container: <code>https://<storage-account>.blob.core.windows.net/<container>?restype=container</code></li>\n<li>Blob: <code>https://<storage-account>.blob.core.windows.net/<container>/<blob>?comp=metadata</code></li>\n</ul>\n\n<p>Retrieving metadata: <code>GET</code> or <code>HEAD</code> (example: <code>GET https://<storage-account>.blob.core.windows.net/<container>/<blob>?comp=metadata</code>)</p>\n<p>Setting metadata: <code>PUT</code> (example: <code>PUT <a href=\"https://myaccount.blob.core.windows.net/mycontainer?comp=metadata?restype=container\" target=\"_blank\" rel=\"noopener noreferrer\">https://myaccount.blob.core.windows.net/mycontainer?comp=metadata?restype=container</a></code>)</p>\n\n<p>The format for the header is: <code>x-ms-meta-name:string-value</code>.</p>\n\n<p>If two or more metadata headers with the same name are submitted for a resource, the Blob service returns status code <code>400 (Bad Request)</code>.</p>\n\n<p>The total size of all metadata pairs can be up to 8KB in size.</p>\n\n<p>Partial updates are not supported: setting metadata on a resource overwrites any existing metadata values for that resource.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-18",
        "title": "Standard Properties for Containers and Blobs",
        "content": "<code>ETag</code> and <code>Last-Modified</code> are common for containers and blobs.\n\n<p>For HTTP names start with <code>x-ms-meta</code>.</p>\n\n<p>Containers:</p>\n\n<ul>\n<li>ETag (<code>x-ms-meta-etag</code>)</li>\n<li>Last-Modified (<code>x-ms-meta-last-modified</code>)</li>\n</ul>\n\n<p>Blobs:</p>\n\n<ul>\n<li>ETag (<code>x-ms-meta-etag</code>)</li>\n<li>Last-Modified (<code>x-ms-meta-last-modified</code>)</li>\n<li>Content-Length (<code>x-ms-meta-content-length</code>)</li>\n<li>Content-Type (<code>x-ms-meta-content-type</code>)</li>\n<li>Content-MD5 (<code>x-ms-meta-content-md5</code>)</li>\n<li>Content-Encoding (<code>x-ms-meta-content-encoding</code>)</li>\n<li>Content-Language (<code>x-ms-meta-content-language</code>)</li>\n<li>Cache-Control (<code>x-ms-meta-cache-control</code>)</li>\n<li>Origin (<code>x-ms-meta-origin</code>)</li>\n<li>Range (<code>x-ms-meta-range</code>)</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-19",
        "title": "Access conditions",
        "content": "<p><pre><code class=\"language-cs\">BlobProperties properties = await blobClient.GetPropertiesAsync();\n\nBlobRequestConditions conditions = new BlobRequestConditions\n{\n    IfMatch = properties.Value.ETag, // Limit requests to resources that have not be modified since they were last fetched.\n    IfModifiedSince = DateTimeOffset.UtcNow.AddHours(-1), // Limit requests to resources modified since this time.\n    IfNoneMatch = new Azure.ETag(&quot;some-etag-value&quot;), // Limit requests to resources that do not match the ETag.\n    IfUnmodifiedSince = DateTimeOffset.UtcNow.AddHours(-2), // Limit requests to resources that have remained unmodified.\n    LeaseId = &quot;some-lease-id&quot;, // Limit requests to resources with an active lease matching this Id.\n    TagConditions = &quot;tagKey = &#39;tagValue&#39;&quot; // Optional SQL statement to apply to the Tags of the Blob.\n};\n\nBlobUploadOptions options = new BlobUploadOptions\n{\n    Metadata = new Dictionary&lt;string, string&gt; { { &quot;key&quot;, &quot;value&quot; } },\n    Conditions = conditions\n};\n\n// Upload blob only if mathcing conditions\nawait blobClient.UploadAsync(BinaryData.FromString(&quot;data&quot;), options);</code></pre></p>\n<p><pre><code class=\"language-sh\">az storage blob &lt;operation&gt;\n# ETag value, or the wildcard character (*)\n    [--if-match]\n    [--if-none-match]\n\n    [--if-modified-since]\n    [--if-unmodified-since]\n\n# SQL clause to check tags\n    [--tags-condition]</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Authorization",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key\" target=\"_blank\" rel=\"noopener noreferrer\">Shared Key (storage account key)</a> (<code>StorageSharedKeyCredential</code>): A secret password that gives full access to your Azure Storage account. ⭐: programmatic access (ex: data migration)</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/authorize-access-azure-active-directory\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft Entra ID</a> (<code>DefaultAzureCredential</code>): Identity-based, role-based authorization with advanced security. ⭐: fine-grained enterprise access control.</li>\n<li>App credentials (<code>ClientSecretCredential</code>): App needs to be registered first.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "Use OAuth access tokens for authentication",
        "content": "<ul>\n<li><strong>Delegation Scope</strong>: Use <code>user_impersonation</code> to allow applications to perform actions permitted by the user.</li>\n<li><strong>Resource ID</strong>: Use <code><a href=\"https://storage.azure.com/\" target=\"_blank\" rel=\"noopener noreferrer\">https://storage.azure.com/</a></code> to request tokens.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-22",
        "title": "Manage access rights with RBAC",
        "content": "<p>In addition to <code>Storage Blob Data [Standard Role]</code> there also is <code>Storage Blob Delegator</code> for getting user delegation key.</p>\n\n<p>Permissions for Blob service operations: <code>Microsoft.Storage/storageAccounts/blobServices/<op></code> for top level operations, sub <code>containers/<op></code> and <code>containers/blobs/<op></code> for fine grained control. <code><op></code> can be <code>read</code>, <code>write</code>, <code>delete</code>, <code>filter/action</code> (find blobs, blob level only).</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-23",
        "title": "Anonymous public read access",
        "content": "<p>Anonymous public access to your data is always prohibited by default. If the storage account doesn't allow public access, then no container within it can have public access, regardless of its own settings. If public access is allowed at the storage account level, then a container's access depends on its own settings (<strong>Public access: Container</strong>, or <strong>Public access: Blob</strong>).</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-24",
        "title": "By Storage Account Key",
        "content": "<p>--account-key # az storage account keys list -g $resourcegroup -n $accountname --query '[0].value' -o tsv</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-25",
        "title": "By name",
        "content": "<p>[--blob-endpoint] # https://<storage-account>.blob.core.windows.net</p>\n<p>[--account-name] # When using storage account key or a SAS token</p>\n<p>--container-name</p>\n<p>--name # Case sensitive, cannot end with dot (.) or dash (-)</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-26",
        "title": "By URL",
        "content": "<p>--blob-url \"https://<storage-account>.blob.core.windows.net/<container>/<blob>?<SAS>\" # Use <SAS> only if unauthenticated.</p>\n\n<h1><command></h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-27",
        "title": "upload",
        "content": "<p>--file \"/path/to/file\" # for file uploads</p>\n<p>--data \"some data\" # for text uploads</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-28",
        "title": "use -source-<prop> and --destination-<prop>",
        "content": "<h1>Example</h1>\n<p>az storage blob upload --file /path/to/file --container mycontainer --name MyBlob</p>\n<p>az storage container list --account-name $storageaccountname # get containers</p>\n<p>```</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-29",
        "title": "C#",
        "content": "<p><pre><code class=\"language-cs\">// Authorization\n//// Storage Account Key\nTokenCredential credential = new StorageSharedKeyCredential(accountName, &quot;&lt;account-key&gt;&quot;);\n//// Entra ID Login\nTokenCredential credential = new DefaultAzureCredential();\n//// App registration\nTokenCredential credential = new ClientSecretCredential(&quot;&lt;tenant-id&gt;&quot;, &quot;&lt;client-id&gt;&quot;, &quot;&lt;client-secret&gt;&quot;);\n\n// Select account\nvar blobServiceClient = new BlobServiceClient(new Uri(__CODEBLOCK_0__quot;https://${accountName}.blob.core.windows.net&quot;), credential);\n\n// Enumerate containers\nawait foreach (BlobContainerItem container in blobServiceClient.GetBlobContainersAsync()) {}\n\n// Get container\n// Note: BlobContainerClient allows you to manipulate both Azure Storage containers and their blobs\nBlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);\n// BlobContainerClient containerClient = await blobServiceClient.CreateBlobContainerAsync(containerName);\n// BlobContainerClient containerClient = new BlobContainerClient(new Uri(__CODEBLOCK_0__quot;https://{accountName}.blob.core.windows.net/{containerName}&quot;), credential, clientOptions);\n\nBlobClient blobClient = containerClient.GetBlobClient(fileName);\n// Getting a blob reference does not make any calls to Azure Storage, it simply creates an object locally that can work with a stored blob.\n\nawait blobClient.UploadAsync(localFilePath, true);\n\n// List all blobs in the container\nawait foreach (var blobItem in containerClient.GetBlobsAsync()) {}\n\n// Download the blob&#39;s contents and save it to a file\nawait blobClient.DownloadToAsync(downloadFilePath);\n// Alternative version:\nBlobDownloadInfo download = await blobClient.DownloadAsync();\nusing (FileStream downloadFileStream = File.OpenWrite(downloadFilePath));\nawait download.Content.CopyToAsync(downloadFileStream);\n\n// Copy from one container to another, without downloading locally\nBlobContainerClient sourceContainer = blobServiceClient.GetBlobContainerClient(&quot;sourcecontainer&quot;);\nBlobClient sourceBlob = sourceContainer.GetBlobClient(&quot;sourceblob.txt&quot;);\nBlobContainerClient targetContainer = blobServiceClient.GetBlobContainerClient(&quot;targetcontainer&quot;);\nBlobClient targetBlob = targetContainer.GetBlobClient(&quot;targetblob.txt&quot;);\nawait targetBlob.StartCopyFromUriAsync(sourceBlob.Uri);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-30",
        "title": "HTTP",
        "content": "<code>PUT</code>: upload file, create container.\n\n<p>Headers:</p>\n\n<ul>\n<li>Optional: <code>x-ms-date</code>, <code>x-ms-version</code></li>\n<li><code>Authorization</code>:</li>\n<li>Storage Account Key: <code>[Storage_Account_Key]</code></li>\n<li>Shared key: <code>SharedKey [your_account]:[signature]</code></li>\n<li>Entra ID: <code>Bearer [access_token]</code></li>\n</ul>\n\n<p>SAS GET param may be used instead of <code>Authorization</code> header.</p>\n<p><pre><code class=\"language-http\">GET https://&lt;account&gt;.blob.core.windows.net/?comp=list # list containers\nPUT https://&lt;account&gt;.blob.core.windows.net/&lt;container&gt;?restype=container # create container\nGET https://&lt;account&gt;.blob.core.windows.net/&lt;container&gt;?restype=container&amp;comp=list # list blobs in container\nPUT https://&lt;account&gt;.blob.core.windows.net/&lt;container&gt;/&lt;blob&gt; # upload file\nGET https://&lt;account&gt;.blob.core.windows.net/&lt;container&gt;/&lt;blob&gt; # download file</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-31",
        "title": "Object replication",
        "content": "<p>Asynchronously copies block blobs from a source to a destination account. To use this feature, you'll need to enable <strong>Change Feed</strong> and <strong>Blob Versioning</strong>, and it's compatible only with <strong>general-purpose v2</strong> and <strong>premium block blob accounts</strong>. However, it doesn't support append blobs, page blobs, or custom encryption keys.</p>\n\n<p>The process involves 2 main steps:</p>\n\n<ol>\n<li>Creating a replication policy.</li>\n<li>Setting rules to specify which blobs to replicate.</li>\n</ol>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-32",
        "title": "AzCopy",
        "content": "<p><pre><code class=\"language-sh\"># Move local data to blob storage\nazcopy copy &quot;C:\\local\\path&quot; &quot;https://&lt;storage-account&gt;.blob.core.windows.net/&lt;container&gt;/&lt;sas-token&gt;&quot; --recursive=true\n\n# Syncronize (avoid copying existing files again, when running multiple times)\nazcopy sync \\\n  &quot;https://&lt;source-storage-account&gt;.blob.core.windows.net/&lt;container&gt;/&lt;sas-token&gt;&quot; \\\n  &quot;https://&lt;destination-storage-account&gt;.blob.core.windows.net/&lt;container&gt;/&lt;sas-token&gt;&quot; \\\n  --recursive=true</code></pre></p>\n<p>Destination needs <code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/add/action</code> permission when adding new lob to the destination.</p>\n<p>If copying existing blob, source needs <code>Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read</code> permission.</p>\n\n<p>You can also use <a href=\"https://learn.microsoft.com/en-us/cli/azure/storage/blob/copy?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">AZ CLI</a>, <a href=\"https://learn.microsoft.com/en-us/powershell/module/az.storage/start-azstorageblobcopy?view=azps-10.2.0&viewFallbackFrom=azps-4.6.0\" target=\"_blank\" rel=\"noopener noreferrer\">Powershell</a>, or <a href=\"https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.storage.blob.cloudblockblob.startcopyasync?view=azure-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\">SDK</a>.</p>\n\n<p>When copying, for destination you need SAS or OAuth authentication (Azure Files only supports SAS).</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-33",
        "title": "Network Access Rules",
        "content": "<p>By default, Azure Storage Accounts accept connections from clients on any network.</p>\n\n<p>Steps to Change the Default Network Access Rule:</p>\n\n<ul>\n<li>Disable All Public Network Access</li>\n<li>Enable Access from Selected Networks</li>\n<li>Apply Network Rules</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "AZ CLI",
      "Containers",
      "Entra ID",
      "Key Vault"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "compute-solutions",
    "topic": "compute-solutions",
    "title": "Compute Solutions",
    "description": "| Service                   | Suitable Scenarios                                                          | Distinctive Features",
    "difficulty": "Intermediate",
    "estimatedReadTime": 3,
    "tags": [
      "Compute Solutions",
      "App Service",
      "Azure Functions",
      "Kubernetes",
      "API",
      "Scaling"
    ],
    "learningObjectives": [
      "Understand comparison by feature"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Basic programming knowledge (C#, JavaScript, or Python)"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Service</th>\n      <th>Suitable Scenarios</th>\n      <th>Distinctive Features</th>\n      <th>Specific Criteria</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Azure Container Apps</td>\n      <td>Building serverless microservices based on containers</td>\n      <td>General-purpose containers, Kubernetes-style apps, event-driven architectures, long-running processes</td>\n      <td>No need for direct access to native Kubernetes APIs</td>\n    </tr>\n    <tr>\n      <td>Azure App Service</td>\n      <td>Fully managed hosting for web applications, including websites and web APIs</td>\n      <td>Optimized for web applications, integrated with other Azure services</td>\n    </tr>\n    <tr>\n      <td>Azure Container Instances</td>\n      <td>Lower-level \"building block\" option compared to Container Apps</td>\n      <td>No scale, load balancing, and certificates</td>\n      <td>Less \"opinionated\" building block</td>\n    </tr>\n    <tr>\n      <td>Azure Kubernetes Service</td>\n      <td>Fully managed Kubernetes option in Azure</td>\n      <td>Direct access to the Kubernetes API, runs any Kubernetes workload</td>\n    </tr>\n    <tr>\n      <td>Azure Functions</td>\n      <td>Running event-driven applications using the functions programming model</td>\n      <td>Short-lived functions deployed as either code or containers</td>\n    </tr>\n  </tbody>\n</table>\n\n<ul>\n<li><strong>Azure Container Apps</strong> vs. <strong>AKS</strong>: If you require access to the Kubernetes APIs and control plane, use AKS. If you want to build Kubernetes-style applications without needing direct access to all native Kubernetes APIs, Container Apps is preferable.</li>\n<li><strong>Azure Container Instances</strong> vs. <strong>Container Apps</strong>: ACI is a more basic building block without application-specific concepts like scale and load balancing, while Container Apps provides these features.</li>\n<li><strong>Azure Functions</strong> vs. <strong>Container Apps</strong>: Both are suitable for event-driven applications, but Functions is optimized for short-lived functions, while Container Apps is more general-purpose.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-2",
        "title": "Comparison by feature",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Container Apps</th>\n      <th>Container Instances</th>\n      <th>App Services</th>\n      <th>Kubernetes Service (AKS)</th>\n      <th>Functions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Scaling</strong></td>\n      <td>Auto-scaling</td>\n      <td>Manual scaling only</td>\n      <td>Auto-scaling</td>\n      <td>Cluster Autoscaler (say no)</td>\n      <td>Consumption-based auto-scaling</td>\n    </tr>\n    <tr>\n      <td><strong>State Management</strong></td>\n      <td>Stateless</td>\n      <td>Stateless</td>\n      <td>Both stateless and stateful</td>\n      <td>Both stateless and stateful</td>\n      <td>Stateless</td>\n    </tr>\n    <tr>\n      <td><strong>Resource Isolation</strong></td>\n      <td>Shared</td>\n      <td>Dedicated</td>\n      <td>Shared/Dedicated</td>\n      <td>Dedicated</td>\n      <td>Shared</td>\n    </tr>\n    <tr>\n      <td><strong>Cost</strong></td>\n      <td>Pay-as-you-go</td>\n      <td>Pay-as-you-go</td>\n      <td>Fixed + Scale</td>\n      <td>Cluster costs + Node costs</td>\n      <td>Pay-as-you-go or fixed</td>\n    </tr>\n    <tr>\n      <td><strong>Multi-Region Support</strong></td>\n      <td>No</td>\n      <td>No</td>\n      <td>Yes</td>\n      <td>Yes</td>\n      <td>Yes</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Note: Functions is not a containerized solution.</p>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "App Service",
      "Containers",
      "Functions"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/container-apps/compare-options",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "containers",
    "topic": "containers",
    "title": "Containers",
    "description": "Comprehensive guide to Containers in Microsoft Azure platform",
    "difficulty": "Beginner",
    "estimatedReadTime": 40,
    "tags": [
      "Containers",
      "Blob Storage",
      "Service Bus",
      "Event Hub",
      "Key Vault",
      "App Service"
    ],
    "learningObjectives": [
      "name: helloworld",
      "name: \"PUBLIC_ENV_VAR\"",
      "name: \"SECRET_ENV_VAR\"",
      "Create the storage account",
      "Create a file share"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Basic understanding of containerization concepts",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Container Registry",
        "content": "<p>Endpoint: <code><registry>.azurecr.io/<repository>/<image-or-artifact>:<tag></code></p>\n\n<code><repository></code> is also known as <code><namepsace></code>. It allows sharing a single registry across multiple groups within your organization. Can be multiple levels deep. Optional.",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Working with Azure Container Registry",
        "content": "<p>```sh</p>\n<h1>Login to manage resources</h1>\n<p>az login</p>\n\n<h1>Create a resource group</h1>\n<p>az group create --name $resourceGroup --location eastus</p>\n\n<h1>Create Azure Container Registry</h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "[--zone-redundancy {Disabled, Enabled}] # 💎: Min 3 separate zones in each enabled region. The environment must include a virtual network (VNET) with an available subnet.",
        "content": "<p>az acr create --resource-group $resourceGroup --name $registryName --sku Standard # ⭐: Production</p>\n<h1>NOTE: High numbers of repositories and tags can impact the performance. Periodically delete unused.</h1>\n\n<h1>ACR Login: <a href=\"https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication</a></h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "az login - provides the token. It has to be renewed every 3 hours",
        "content": "<p>az acr login --name \"$registryName\" # Token must be renewed every 3 hours.</p>\n<p>##</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Create service principal",
        "content": "<h4>Method 1: Short version that will setup and return appId and password in JSON format</h4>\n<p>az ad sp create-for-rbac --name $ServicePrincipalName --role AcrPush,AcrPull,AcrDelete --scopes /subscriptions/$subscriptionId/resourceGroups/$resourceGroup/providers/Microsoft.ContainerRegistry/registries/$registryName</p>\n<h4>Method 2: Create a service principal and configure roles separately</h4>\n<p>az ad sp create --id $ServicePrincipalName</p>\n<p>az role assignment create --assignee $appId --role AcrPush,AcrPull,AcrDelete --scope /subscriptions/$subscriptionId/resourceGroups/$resourceGroup/providers/Microsoft.ContainerRegistry/registries/$registryName</p>\n<p>az ad sp credential reset --name $appId # for method 2 password is not explicitly created, so we need to create (reset) it</p>\n<h4>Note: Password expires in 1 year.</h4>\n<p>az acr login --name $registryName --username $appId --password $password</p>\n<p>##</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "3) Managed identities",
        "content": "<p>az role assignment create --assignee $managedIdentityId --scope $registryName --role AcrPush,AcrPull,AcrDelete</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "The admin account is provided with two passwords, both of which can be regenerated",
        "content": "<p>az acr update -n $registryName --admin-enabled true # this is disabled by default</p>\n<p>docker login $registryName.azurecr.io</p>\n\n<h1>Tasks: <a href=\"https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview</a></h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "- Quick task",
        "content": "<p>az acr build --registry $registryName --image $imageName:$tag . # docker build, docker push</p>\n<p>az acr run --registry $registryName --cmd '$registryName/$repository/$imageName:$tag' /dev/null # Run image (last param is source location, optional for non-image building tasks)</p>\n<p>##</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "[--schedule] # CRON schedule (⭐: OS/framework patching): https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-scheduled",
        "content": "<p>az acr task create --name ciTask --registry $registryName --image $imageName:{{.Run.ID}} --context <a href=\"https://github.com/myuser/myrepo.git\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/myuser/myrepo.git</a> --file Dockerfile --git-access-token $GIT_ACCESS_TOKEN</p>\n<p>az acr task create --name cmdTask --registry $registryName --cmd mcr.microsoft.com/hello-world --context /dev/null</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "NOTE: --file is used for both multi-step task and Dockerfile",
        "content": "<p>az acr run --file multi-step.yaml <a href=\"https://github.com/Azure-Samples/acr-tasks.git\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Azure-Samples/acr-tasks.git</a></p>\n<p>az acr task create --file multi-step.yaml --name ciTask --registry $registryName --image $imageName:{{.Run.ID}} --context <a href=\"https://github.com/myuser/myrepo.git\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/myuser/myrepo.git</a> --git-access-token $GIT_ACCESS_TOKEN</p>\n<p><pre><code class=\"language-text\">Push and run a Docker image:</code></pre>sh</p>\n<h1>Push image to registry</h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Tag the image",
        "content": "<p>docker tag mcr.microsoft.com/hello-world $registryName.azurecr.io/$repository/$imageName:$tag</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Push image",
        "content": "<p>docker push $registryName.azurecr.io/$repository/$imageName:$tag</p>\n\n<h1>Run image from registry</h1>\n<p>docker run $registryName.azurecr.io/$repository/$imageName:$tag</p>\n<h1>Alt: az acr run --registry $registryName --cmd '$registryName/$repository/$imageName:$tag' /dev/null</h1>\n<p><pre><code class=\"language-text\">List container images and tags:</code></pre>sh</p>\n<p>az acr repository list --name $registryName --output table</p>\n<p>az acr repository show-tags --name $registryName --repository $repository --output table</p>\n<p>```</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Container Instances",
        "content": "<p>Enables the deployment of Docker containers (up to 15 GB) without provisioning virtual machines.</p>\n\n<strong>Does not support scaling! Use Container Apps for that!</strong>\n\n<p>NB: If a container group restarts, its IP might change. Avoid using hardcoded IP addresses. For a stable public IP, consider <a href=\"https://learn.microsoft.com/en-us/azure/container-instances/container-instances-application-gateway\" target=\"_blank\" rel=\"noopener noreferrer\">using Application Gateway</a>.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Working with Azure Container Instances",
        "content": "<p>```sh</p>\n<h1>Login to manage resources</h1>\n<p>az login</p>\n\n<h1>Create a resource group</h1>\n<p>az group create --name $resourceGroup --location eastus</p>\n\n<h1>(Optional)</h1>\n\n<h1>Deployment</h1>\n<p>##</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Environment variables: https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables",
        "content": "<h4>NOTE: Format can be 'key'='value', key=value, 'key=value'</h4>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "NOTE: This creates mysecret1 and mysecret2 files in /mnt/secrets with value the content of the secret",
        "content": "<h3>az container create --name $containerName --image $imageName:$tag --resource-group $resourceGroup</h3>\n<p>##</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-17",
        "title": "Same options as from simple deployment, but in a YAML file. Includes container groups.",
        "content": "<p>az container create --name $containerName --file deploy.yml --resource-group $resourceGroup</p>\n<p>##</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-18",
        "title": "No example, but it's good to know this fact",
        "content": "<h1>Verify container is running</h1>\n<p>az container show --name $containerName --resource-group $resourceGroup --query \"{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}\" --out table</p>\n<p><pre><code class=\"language-text\">YAML deployment (`deploy.yml`) (see CLI example above for reference):</code></pre>yml</p>\n<p>apiVersion: \"2019-12-01\"</p>\n<p>location: eastus</p>\n<p>name: containerName</p>\n<p>properties:</p>\n<h1>Container groups: <a href=\"https://learn.microsoft.com/en-us/azure/container-instances/container-instances-container-groups\" target=\"_blank\" rel=\"noopener noreferrer\">https://learn.microsoft.com/en-us/azure/container-instances/container-instances-container-groups</a></h1>\n<h1>Containers use a single host machine, sharing lifecycle, resources, network (share an external IP, ports. DNS), and storage volumes</h1>\n<h1>For Windows containers, only single-instance deployment are allowed (NOTE: Here we use two!)</h1>\n<h1>The resources allocated for the host are sum of all resources requested (In this case: 2 CPUs and 2.5 GB RAM)</h1>\n<p>containers:</p>\n<ul>\n<li>name: helloworld</li>\n</ul>\n<p>properties:</p>\n<p>environmentVariables:</p>\n<ul>\n<li>name: \"PUBLIC_ENV_VAR\"</li>\n</ul>\n<p>value: \"my-exposed-value\"</p>\n\n<ul>\n<li>name: \"SECRET_ENV_VAR\"</li>\n</ul>\n<p>secureValue: \"my-secret-value\"</p>\n<p>image: mcr.microsoft.com/hello-world</p>\n<p>ports:</p>\n<ul>\n<li>port: 443</li>\n</ul>\n<p>resources:</p>\n<p>requests:</p>\n<p>cpu: 1.0</p>\n<p>memoryInGB: 1</p>\n<p>volumeMounts:</p>\n<ul>\n<li>mountPath: /mnt/secrets</li>\n</ul>\n<p>name: secretvolume</p>\n<ul>\n<li>name: hellofiles</li>\n</ul>\n<p>properties:</p>\n<p>environmentVariables: []</p>\n<p>image: mcr.microsoft.com/azuredocs/aci-hellofiles</p>\n<p>ports:</p>\n<ul>\n<li>port: 80</li>\n</ul>\n<p>resources:</p>\n<p>requests:</p>\n<p>cpu: 1.0</p>\n<p>memoryInGB: 1.5</p>\n<p>volumeMounts:</p>\n<ul>\n<li>mountPath: /aci/logs/</li>\n</ul>\n<p>name: filesharevolume</p>\n<p>osType: Linux # or Windows (for single containers)</p>\n<p>restartPolicy: Always</p>\n<p>ipAddress:</p>\n<p>type: Public</p>\n<p>ports:</p>\n<ul>\n<li>port: 443</li>\n<li>port: 80</li>\n</ul>\n<p>dnsNameLabel: containerName</p>\n<p>volumes:</p>\n<ul>\n<li>name: filesharevolume</li>\n</ul>\n<p>azureFile:</p>\n<p>sharename: acishare</p>\n<p>storageAccountName: <Storage account name></p>\n<p>storageAccountKey: <Storage account key></p>\n<ul>\n<li>name: secretvolume</li>\n</ul>\n<p>secret:</p>\n<h1>NB: The secret values must be Base64-encoded!</h1>\n<p>mysecret1: TXkgZmlyc3Qgc2VjcmV0IEZPTwo= # \"My first secret FOO\"</p>\n<p>mysecret2: TXkgc2Vjb25kIHNlY3JldCBCQVIK # \"My second secret BAR\"</p>\n<p>tags: {}</p>\n<p>type: Microsoft.ContainerInstance/containerGroups</p>\n<p>```</p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-19",
        "title": "Note for Azure File Shares",
        "content": "<strong>Azure Container Instances does not support direct integration Blob Storage</strong> because it lacks SMB support.\n\n<p>To use Azure File Share, you need to:</p>\n\n<ul>\n<li>Create the storage account</li>\n<li>Create a file share</li>\n<li>From storage account, you need Storage account name, Share name, and Storage account key.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Container Instances Diagnostics and Logging",
        "content": "<code>az container attach</code> Connects your local console to a container's output and error streams in <strong>real time</strong> (example: to debug startup issue).\n\n<code>az container logs</code> Displays logs (when no real time monitoring is needed)",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "Azure Container Apps",
        "content": "<p>Fully managed (no need to manage other Azure infrastructure) environment. Common use cases:</p>\n\n<ul>\n<li>Deploying API endpoints</li>\n<li>Hosting background processing applications</li>\n<li>Handling event-driven processing</li>\n<li>Running microservices</li>\n</ul>\n\n<p>Limitations:</p>\n\n<ul>\n<li>Cannot run privileged containers (no root).</li>\n<li>linux/amd64 container images are required.</li>\n<li>State doesn't persist inside a container due to regular restarts. Use external caches for in-memory cache requirements.</li>\n</ul>\n\n<p>A webhook can be used to notify Azure Container Apps when a new image has been pushed to the ACR, triggering automatic deployment of the updated container.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-22",
        "title": "Criteria for using multiple environments",
        "content": "<ul>\n<li>Different virtual networks: VNet is scoped at the environment level.</li>\n<li>Different Log Analytics workspaces: Diagnostics settings are tied to the environment.</li>\n<li>Different regional deployments (i.e. apps in different Azure regions): An environment is region-bound.</li>\n<li>Different managed identities for environment-level operations (rare): Only if using environment-scope identity.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-23",
        "title": "Auth",
        "content": "<p>The platform's authentication and authorization middleware component runs as a _sidecar_ container on each application replica, screening all incoming HTTPS (ensure <code>allowInsecure</code> is _disabled_ in ingress config) requests before they reach your application. <a href=\"./App%20Service%20Web%20Apps.md\" target=\"_blank\" rel=\"noopener noreferrer\">See more</a>. It requires any identity provider and specified provider within app settings.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-24",
        "title": "Managed identities",
        "content": "<p>Main topic: <a href=\"./Managed%20Identities.md\" target=\"_blank\" rel=\"noopener noreferrer\">Managed Identities</a></p>\n\n<p>Not supported in scaling rules.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-25",
        "title": "Scaling",
        "content": "<p>Scaling is driven by three different categories of triggers:</p>\n\n<ul>\n<li>HTTP: Based on the number of concurrent HTTP requests to your revision.</li>\n<li>TCP: Based on the number of concurrent TCP connections to your revision.</li>\n<li>Custom: Based on CPU, memory (_cannot scale to 0_), or supported event-driven data sources such as:</li>\n<li>Azure Service Bus</li>\n<li>Azure Event Hubs</li>\n<li>Apache Kafka</li>\n<li>Redis</li>\n</ul>\n\n<p>As a container app revision scales out, new instances of the revision are created on-demand. These instances are known as replicas (default: 0-10). Adding or editing scaling rules creates a new revision of the container app. In \"multiple revisions\" mode, adding a new scale trigger creates a new revision of your application but your old revision remains available with the old scale rules.</p>\n\n<p>Example:</p>\n<p>```sh</p>\n<p>az containerapp create \\</p>\n<h1>...</h1>\n<p>--min-replicas 0 \\</p>\n<p>--max-replicas 5 \\</p>\n\n<h1>HTTP Scaling Rule</h1>\n<p>--scale-rule-name http-rule-name \\</p>\n<p>--scale-rule-type http \\</p>\n<p>--scale-rule-http-concurrency 100</p>\n\n<h1>TCP Scaling Rule</h1>\n<p>--scale-rule-name tcp-rule-name \\</p>\n<p>--scale-rule-type tcp \\</p>\n<p>--scale-rule-tcp-concurrency 100</p>\n\n<h1>Custom Scaling rule</h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-26",
        "title": "Note we use --secrets to define the connection string and reuse it by secret name in --scale-rule-auth",
        "content": "<p>--secrets \"connection-string-secret=<SERVICE_BUS_CONNECTION_STRING>\" \\</p>\n<p>--scale-rule-auth \"connection=connection-string-secret\"</p>\n<p>--scale-rule-name servicebus-rule-name \\</p>\n<p>--scale-rule-type azure-servicebus \\</p>\n<p>--scale-rule-metadata \"queueName=my-queue\" \"namespace=service-bus-namespace\" \"messageCount=5\"</p>\n<p>```</p>\n<p>Without a scale rule, the default (HTTP, 0-10 replicas) applies to your app. Create a rule or set minReplicas to 1+ if ingress is disabled. Without minReplicas or a custom rule, your app can scale to zero and won't start.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-27",
        "title": "Revisions",
        "content": "<p>Immutable snapshots of a container app version. The first revision is auto-created upon deployment, new are created on revision scope changes. Up to 100 revisions can be stored for history. Multiple revisions can run at once, with HTTP traffic split among them.</p>\n\n<ul>\n<li><strong>Single revision mode</strong>: keeps the old revision active until the new one is ready.</li>\n<li><strong>Multiple revision mode</strong>: you control revision lifecycle and traffic distribution (via ingress), with traffic only switching to the latest revision when it's ready.</li>\n</ul>\n\n<p>Revision Labels: direct traffic to specific revisions. A label provides a unique URL that you can use to route traffic to the revision that the label is assigned.</p>\n\n<p>Scopes:</p>\n\n<ul>\n<li>Revision-scope changes via <code>az containerapp update</code> trigger a new revision when you deploy your app. Trigger: changing <a href=\"https://learn.microsoft.com/en-us/azure/container-apps/azure-resource-manager-api-spec?tabs=arm-template#propertiestemplate\" target=\"_blank\" rel=\"noopener noreferrer\">properties.template</a>. Example: version suffix, container config, scaling rules. The changes don't affect other revisions.</li>\n<li>Application-scope changes are globally applied to all revisions. A new revision isn't created Trigger: changing <a href=\"https://learn.microsoft.com/en-us/azure/container-apps/azure-resource-manager-api-spec?tabs=arm-template#propertiesconfiguration\" target=\"_blank\" rel=\"noopener noreferrer\">properties.configuration</a>. Example: secrets, revision mode, ingress, credentials, DARP settings.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-28",
        "title": "Secrets",
        "content": "<p>Secrets are scoped to an application (<code>az containerapp create</code>), outside of any specific revision of an application. Once secrets are defined at the application level, secured values are available to container apps. Adding, removing, or changing secrets doesn't generate new revisions. Apps need to be restarted to reflect updates.</p>\n\n<p>Defining secrets: <code>--secrets \"queue-connection-string=<CONNECTION_STRING>\"</code></p>\n\n<p>Secrets from Key Vault: <code>--secrets \"kv-connection-string=keyvaultref:<KEY_VAULT_SECRET_URI>,identityref:<USER_ASSIGNED_IDENTITY_ID>\"</code></p>\n\n<p>Mounting Secrets in a Volume (secret name is filename, secret value is content): <code>--secret-volume-mount \"/mnt/secrets\"</code></p>\n\n<p>Referencing Secrets in Environment Variables (<code>secretref:</code>): <code>--env-vars \"QueueName=myqueue\" \"ConnectionString=secretref:queue-connection-string\"</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-29",
        "title": "Logging",
        "content": "<ul>\n<li>System Logs (at the container app level)</li>\n<li>Console Logs (from the <code>stderr</code> and <code>stdout</code> messages inside container app)</li>\n</ul>\n\n<h4>Query Log with Log Analytics</h4>\n<p><pre><code class=\"language-sh\"># ContainerAppConsoleLogs_CL or ContainerAppSystemLogs_CL\naz monitor log-analytics query --workspace $WORKSPACE_CUSTOMER_ID --analytics-query &quot;ContainerAppConsoleLogs_CL | where ContainerAppName_s == &#39;album-api&#39; | project Time=TimeGenerated, AppName=ContainerAppName_s, Revision=RevisionName_s, Container=ContainerName_s, Message=Log_s, LogLevel_s | take 5&quot; --out table</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-30",
        "title": "Deployment",
        "content": "<ul>\n<li><code>az containerapp create</code> - Creates a new container app in Azure with specific configurations (CPU, memory, environment variables, etc).</li>\n<li><code>az containerapp up</code> - Quicker and more automated deployment process, ideal for development or testing.</li>\n</ul>\n\n<p>If you anticipate needing more control or specific configurations in the future, <code>az containerapp create</code> might be the more suitable choice. If simplicity and speed are the primary concerns, <code>az containerapp up</code> might be preferred.</p>\n<p><pre><code class=\"language-sh\"># https://learn.microsoft.com/en-us/azure/container-apps/containerapp-up\n\n# Upgrade Azure CLI version on the workstation\naz upgrade\n\n# Add and upgrade the containerapp extension for managing containerized services\naz extension add --name containerapp --upgrade\n\n# Login to Azure\naz login\n\n# Register providers for Azure App Services (for hosting APIs) and Azure Operational Insights (for telemetry)\naz provider register --namespace Microsoft.App\naz provider register --namespace Microsoft.OperationalInsights\n\n# Create an environment &#39;prod&#39; in Azure Container Apps\naz containerapp env create --resource-group $resourceGroup --name prod\n\n# Deploy the API service to the &#39;prod&#39; environment, using the source code from a repository\n# https://learn.microsoft.com/en-us/azure/container-apps/quickstart-code-to-cloud\nfunction deploy_repo() {\n  az containerapp up \\\n    --name MyAPI \\\n    --resource-group $resourceGroup \\\n    --location eastus \\\n    --environment prod \\\n    --context-path ./src \\\n    --repo myuser/myrepo \\\n    --ingress &#39;external&#39;\n\n# Display the Fully Qualified Domain Name (FQDN) of the app after it&#39;s deployed. This is the URL you would use to access your application.\n  az containerapp show --name MyAPI --resource-group $resourceGroup --query properties.configuration.ingress.fqdn\n}\n\n# Deploy a containerized application in Azure Container Apps, using an existing public Docker image\n# https://learn.microsoft.com/en-us/azure/container-apps/get-started\nfunction deploy_image() {\n  az containerapp up \\\n    --name MyContainerApp \\\n    --resource-group $resourceGroup \\\n    --environment prod \\\n    --image mcr.microsoft.com/azuredocs/containerapps-helloworld:latest \\\n    --target-port 80 \\\n    --ingress &#39;external&#39; \\ # allows the application to be accessible from the internet.\n# Display the Fully Qualified Domain Name (FQDN) of the app after it&#39;s deployed. This is the URL you would use to access your application.\n    --query properties.configuration.ingress.fqdn\n\n# Alt: Deploy from a Docker Image in Azure Container Registry (ACR)\n# --image myAcr.azurecr.io/myimage:latest \\\n# --registry-username myAcrUsername \\\n# --registry-password myAcrPassword \\\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-31",
        "title": "Disaster and Recovery",
        "content": "<p>In the event of a full region outage, you have two strategies:</p>\n\n<ul>\n<li><strong>Manual recovery</strong>:</li>\n<li>Manually deploy to a new region</li>\n<li>Wait for the region to recover, and then manually redeploy all environments and apps.</li>\n<li><strong>Resilient recovery</strong>: Deploy your container apps in advance to multiple regions. Use a traffic management service (ex: Azure Front Door) to direct requests to your main region. In case of an outage, reroute traffic from the affected region.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-32",
        "title": "Dapr integration with Azure Container Apps",
        "content": "<p>Dapr is activated per container app. Its APIs are accessible via a Dapr sidecar using HTTP or gRPC. Dapr's modular design allows shared or app-specific components, which can connect to external services and securely access configuration metadata. By default Dapr-enabled container apps load the full set of deployed components. To load components only for the right apps, application scopes are used.</p>\n\n<p>Enable Dapr: <code>az containerapp create --dapr-enabled ...</code></p>\n\n<p>Main APIs provided by Dapr:</p>\n\n<ul>\n<li><a href=\"https://docs.dapr.io/developing-applications/building-blocks/service-invocation/service-invocation-overview/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Service-to-service invocation</strong></a>: Enables secure, direct service calls.</li>\n<li><a href=\"https://docs.dapr.io/developing-applications/building-blocks/state-management/state-management-overview/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>State management</strong></a>: Manages transactions and CRUD operations.</li>\n<li><a href=\"https://docs.dapr.io/developing-applications/building-blocks/pubsub/pubsub-overview\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Pub/sub</strong></a>: Facilitates communication between container apps via message broker. For event-driven architecture.</li>\n<li><a href=\"https://docs.dapr.io/developing-applications/building-blocks/bindings/bindings-overview/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Bindings</strong></a>: Communicate with external systems.</li>\n<li><a href=\"https://docs.dapr.io/developing-applications/building-blocks/actors/actors-overview/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Actors</strong></a>: Supports scalable, message-driven units of work.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/container-apps/observability\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Observability</strong></a>: Sends tracing information to an Application Insights backend.</li>\n<li><a href=\"https://docs.dapr.io/developing-applications/building-blocks/secrets/secrets-overview/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Secrets</strong></a>: Accesses secrets or references secure values in Dapr components.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-33",
        "title": "Docker",
        "content": "<ul>\n<li><code>dotnet/core/sdk</code> - build an ASP.NET app</li>\n<li><code>dotnet/core/aspnet</code> - run an ASP.NET app</li>\n</ul>\n<p><pre><code class=\"language-Dockerfile\"># Sets the working directory to `/app`, which is where app files will be copied.\nWORKDIR /app\n# Copies the contents of the published app to the container&#39;s working directory (`/app` in this case).\nCOPY bin/Release/net6.0/publish/ .</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-34",
        "title": "Multi-stage",
        "content": "<ul>\n<li>Compile Stage:</li>\n<li>Choose a base image suitable for compiling the code.</li>\n<li>Set the working directory.</li>\n<li>Copy the source code.</li>\n<li>Compile the code.</li>\n<li>Runtime Stage:</li>\n<li>Choose a base image suitable for running the application.</li>\n<li>Copy compiled binaries or artifacts from the compile stage.</li>\n<li>Set the command to run the application.</li>\n</ul>\n<p><pre><code class=\"language-Dockerfile\">FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build\nWORKDIR /app\n\n# copy csproj and restore as distinct layers\nCOPY *.sln .\nCOPY aspnetapp/*.csproj ./aspnetapp/\nRUN dotnet restore\n\n# copy everything else and build app\nCOPY aspnetapp/. ./aspnetapp/\nWORKDIR /app/aspnetapp\nRUN dotnet publish -c Release -o out\n\nFROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS runtime\nWORKDIR /app\nCOPY --from=build /app/aspnetapp/out ./\nENTRYPOINT [&quot;dotnet&quot;, &quot;aspnetapp.dll&quot;]</code></pre></p>\n<a href=\"https://learn.microsoft.com/en-us/visualstudio/containers/container-tools?view=vs-2019#dockerfile-overview\" target=\"_blank\" rel=\"noopener noreferrer\">Serving both secure and non-secure web traffic</a>:\n<p><pre><code class=\"language-Dockerfile\">FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base\nWORKDIR /app\nEXPOSE 80\nEXPOSE 443\n\n# copy csproj and restore as distinct layers\nFROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build\nWORKDIR /src\nCOPY [&quot;WebApplication1/WebApplication1.csproj&quot;, &quot;WebApplication1/&quot;]\nRUN dotnet restore &quot;WebApplication1/WebApplication1.csproj&quot;\n\n# copy everything else and build app\nCOPY . .\nWORKDIR &quot;/src/WebApplication1&quot;\nRUN dotnet build &quot;WebApplication1.csproj&quot; -c Release -o /app/build\n\nFROM build AS publish\nRUN dotnet publish &quot;WebApplication1.csproj&quot; -c Release -o /app/publish\n\nFROM base AS final\nWORKDIR /app\nCOPY --from=publish /app/publish .\nENTRYPOINT [&quot;dotnet&quot;, &quot;WebApplication1.dll&quot;]</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-35",
        "title": "CLI",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Command</th>\n      <th>Brief Explanation</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-login\" target=\"_blank\" rel=\"noopener noreferrer\">az acr login</a></td>\n      <td>Authenticate with an ACR.</td>\n      <td><code>az acr login --name MyRegistry</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-create\" target=\"_blank\" rel=\"noopener noreferrer\">az acr create</a></td>\n      <td>Create a new ACR.</td>\n      <td><code>az acr create --resource-group $resourceGroup --name MyRegistry --sku Basic</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-update\" target=\"_blank\" rel=\"noopener noreferrer\">az acr update</a></td>\n      <td>Update properties of an ACR.</td>\n      <td><code>az acr update --name MyRegistry --tags key=value</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-build\" target=\"_blank\" rel=\"noopener noreferrer\">az acr build</a></td>\n      <td>Build a container image in ACR.</td>\n      <td><code>az acr build --image MyImage:tag --registry MyRegistry .</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr/task?view=azure-cli-latest#az-acr-task-create\" target=\"_blank\" rel=\"noopener noreferrer\">az acr task create</a></td>\n      <td>Create a task for an ACR.</td>\n      <td><code>az acr task create --registry MyRegistry --name MyTask --image MyImage:tag --context /path/to/source</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr/repository?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az acr repository</a></td>\n      <td>Manage repositories (image storage) in ACR.</td>\n      <td><code>az acr repository show-tags --name MyRegistry --repository MyImage</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr/repository?view=azure-cli-latest#az-acr-repository-list\" target=\"_blank\" rel=\"noopener noreferrer\"><code>az acr repository list</code></a></td>\n      <td>List repositories / Verify an image has been pushed to ACR</td>\n      <td><code>az acr repository list --name MyRegistry</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-run\" target=\"_blank\" rel=\"noopener noreferrer\">az acr run</a></td>\n      <td>Queue a run to stream logs for an ACR.</td>\n      <td><code>az acr run --registry MyRegistry --cmd '$Registry/myimage' /dev/null</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-show\" target=\"_blank\" rel=\"noopener noreferrer\">az acr show</a></td>\n      <td>Get the details of an ACR.</td>\n      <td><code>az acr show --name MyRegistry --query \"loginServer\"</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/container?view=azure-cli-latest#az-container-create\" target=\"_blank\" rel=\"noopener noreferrer\">az container create</a></td>\n      <td>Create a container group in ACI (deploy an image).</td>\n      <td><code>az container create --name MyContainer --image myimage:latest</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/container?view=azure-cli-latest#az-container-attach\" target=\"_blank\" rel=\"noopener noreferrer\">az container attach</a></td>\n      <td>Attach local standard output and error streams to a container in a container group.</td>\n      <td><code>az container attach --name MyContainer --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/container?view=azure-cli-latest#az-container-show\" target=\"_blank\" rel=\"noopener noreferrer\">az container show</a></td>\n      <td>Get the details of a container group.</td>\n      <td><code>az container show --name MyContainer --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/container?view=azure-cli-latest#az-container-logs\" target=\"_blank\" rel=\"noopener noreferrer\">az container logs</a></td>\n      <td>Fetch the logs for a container in a container group.</td>\n      <td><code>az container logs --name MyContainer --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/containerapp?view=azure-cli-latest#az-containerapp-create\" target=\"_blank\" rel=\"noopener noreferrer\">az containerapp create</a></td>\n      <td>Create a Container App.</td>\n      <td><code>az containerapp create --name MyContainerApp --resource-group $resourceGroup --image myimage:latest</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/containerapp?view=azure-cli-latest#az-containerapp-up\" target=\"_blank\" rel=\"noopener noreferrer\">az containerapp up</a></td>\n      <td>Create or update a Container App and associated resources.</td>\n      <td><code>az containerapp up --name MyContainerApp</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/containerapp/env?view=azure-cli-latest#az-containerapp-env-create\" target=\"_blank\" rel=\"noopener noreferrer\">az containerapp env create</a></td>\n      <td>Create an environment for a Container App.</td>\n      <td><code>az containerapp env create --name MyEnvironment --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/containerapp?view=azure-cli-latest#az-containerapp-show\" target=\"_blank\" rel=\"noopener noreferrer\">az containerapp show</a></td>\n      <td>Show details of a Container App.</td>\n      <td><code>az containerapp show --name MyContainerApp --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/containerapp/identity?view=azure-cli-latest#az-containerapp-identity-assign\" target=\"_blank\" rel=\"noopener noreferrer\">az containerapp identity assign</a></td>\n      <td>Assign managed identities to a Container App.</td>\n      <td><code>az containerapp identity assign --name MyContainerApp --identities [system]</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az-upgrade\" target=\"_blank\" rel=\"noopener noreferrer\">az upgrade</a></td>\n      <td>Upgrade Azure CLI and extensions.</td>\n      <td><code>az upgrade</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/identity?view=azure-cli-latest#az-identity-create\" target=\"_blank\" rel=\"noopener noreferrer\">az identity create</a></td>\n      <td>Create a managed identity.</td>\n      <td><code>az identity create --name MyManagedIdentity --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/role/assignment?view=azure-cli-latest#az-role-assignment-create\" target=\"_blank\" rel=\"noopener noreferrer\">az role assignment create</a></td>\n      <td>Create a new role assignment for a user, group, or service principal.</td>\n      <td><code>az role assignment create --assignee john.doe@domain.com --role Reader</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az ad sp</a></td>\n      <td>Manage Microsoft Entra ID service principals.</td>\n      <td><code>az ad sp create-for-rbac --name MyServicePrincipal</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/monitor/log-analytics?view=azure-cli-latest#az-monitor-log-analytics-query\" target=\"_blank\" rel=\"noopener noreferrer\">az monitor log-analytics query</a></td>\n      <td>Query a Log Analytics workspace.</td>\n      <td><code>az monitor log-analytics query --workspace MyWorkspace --query 'MyQuery'</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/acr?view=azure-cli-latest#az-acr-import\" target=\"_blank\" rel=\"noopener noreferrer\">az acr import</a></td>\n      <td>Import an image to an ACR from another registry.</td>\n      <td><code>az acr import --name MyRegistry --source myregistry.azurecr.io/myimage:tag</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/containerapp?view=azure-cli-latest#az-containerapp-revision-list\" target=\"_blank\" rel=\"noopener noreferrer\">az containerapp revision list</a></td>\n      <td>List the revisions of a Container App.</td>\n      <td><code>az containerapp revision list --name MyContainerApp --resource-group $resourceGroup</code></td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 3
      }
    ],
    "relatedTopics": [
      "App Service",
      "Application Insights",
      "Blob Storage",
      "Entra ID"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/containers/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "cosmos-db",
    "topic": "cosmos-db",
    "title": "Azure Cosmos DB",
    "description": "https://<account-name>.documents.azure.com:443/ (SQL) - Global Distribution: ⚡ and 99.999% availability for multi-region databases. - Data Models: Supports Key-Value, Document, Column-family, and G...",
    "difficulty": "Beginner",
    "estimatedReadTime": 55,
    "tags": [
      "Cosmos DB",
      "Azure Functions",
      "App Service",
      "API",
      "CLI",
      "SDK"
    ],
    "learningObjectives": [
      "Global Distribution: ⚡ and 99.999% availability for multi-region databases.",
      "Data Models: Supports Key-Value, Document, Column-family, and Graph formats.",
      "Scalability: Scales throughput and storage elastically as needed.",
      "Delegate componet can be used to implement custom logic to process the changes that the change feed reads.",
      "Multi-region Writes - Perform writes in all configured regions. This enhances write latency and availability."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Basic programming knowledge (C#, JavaScript, or Python)",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<code>https://<account-name>.documents.azure.com:443/</code> (SQL)\n\n<ul>\n<li><strong>Global Distribution:</strong> ⚡ and 99.999% availability for multi-region databases.</li>\n<li><strong>Data Models:</strong> Supports Key-Value, Document, Column-family, and Graph formats.</li>\n<li><strong>Scalability:</strong> Scales throughput and storage elastically as needed.</li>\n<li><strong>Consistency:</strong> Choose trade-off between data accuracy and performance.</li>\n<li><strong>SLAs:</strong> Covers latency, throughput, consistency, and availability.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Use Cases",
        "content": "<ul>\n<li>IoT: Handles massive real-time data and traffic spikes.</li>\n<li>Retail: Offers low-latency data access worldwide.</li>\n<li>Gaming: Scales for millions of players with synchronized game states.</li>\n<li>Analytics: Balances performance and consistency for real-time analysis.</li>\n<li>Personalization: query user activity data to drive real-time, personalized experiences</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Core Components",
        "content": "<p>!<a href=\"https://learn.microsoft.com/en-us/training/wwl-azure/explore-azure-cosmos-db/media/cosmos-entities.png\" target=\"_blank\" rel=\"noopener noreferrer\">Image showing the hierarchy of Azure Cosmos DB entities: Database accounts are at the top, Databases are grouped under accounts, Containers are grouped under databases.</a></p>\n\n<ul>\n<li><a href=\"https://docs.microsoft.com/en-us/azure/cosmos-db/manage-account\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Cosmos DB Account</strong></a>: Manages databases like storage accounts manage containers. Free tier availability is limited to one per subscription.</li>\n<li><strong>Databases</strong>: Serves as a _namespace_, managing containers, users, permissions, and consistency levels.</li>\n<li><strong>Containers</strong>: Data is stored on one or more servers, called partitions. Partition keys are used for efficient data distribution. Containers are schema-agnostic.</li>\n<li><strong>Items</strong>: Smallest read/write data units. Schema-agnostic and API-dependent, they can represent documents, rows, nodes, or edges. Automatically indexed in containers without explicit management.</li>\n</ul>\n\n<p>Note: Partition keys always start with <code>/</code> (ex: <code>/partitionkey</code>). Min length for all names is 3 chars, alphanumeric.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Time to live (TTL)",
        "content": "<p>Auto-deletes items after a set time (seconds) from last modification. Configurable at container or item level; item settings take precedence. Deletion consumes spare RUs; low RUs cause deletion delays but expired data is not shown in queries. No container-level TTL or a value of -1 prevents auto-expiration unless item-specific TTL exists. Use <code>DefaultTimeToLive</code> in <code>ContainerProperties</code> to set TTL in C#.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Examples",
        "content": "<a href=\"https://learn.microsoft.com/en-us/cli/azure/cosmosdb?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">Azure CLI</a>:\n<p><pre><code class=\"language-sh\"># Create a Cosmos DB account\naz cosmosdb create --name $account --kind GlobalDocumentDB ...\n\n# Create a database\naz cosmosdb sql database create --account-name $account --name $database\n\n# Create a container\naz cosmosdb sql container create --account-name $account --database-name $database --name $container --partition-key-path &quot;/mypartitionkey&quot;\n\n# Create an item\naz cosmosdb sql container item create --account-name $account --database-name $database --container-name $container --value &quot;{\\&quot;id\\&quot;: \\&quot;1\\&quot;, \\&quot;mypartitionkey\\&quot;: \\&quot;mypartitionvalue\\&quot;, \\&quot;description\\&quot;: \\&quot;mydescription\\&quot;}&quot;</code></pre></p>\n<a href=\"https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos?view=azure-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\">Azure Cosmos DB .NET SDK</a>:\n<p><pre><code class=\"language-cs\">var cosmosClient = new CosmosClient(&quot;&lt;connection-string&gt;&quot;); // credentials or/and options\n\n// Create a database\nDatabase database = await cosmosClient.CreateDatabaseIfNotExistsAsync(&quot;&lt;database&gt;&quot;);\n// NOTE: You can use DatabaseResponse instead of Database if you need information like status codes or headers.\n\n// database = await database.ReadAsync(); // Re-fetch data\n\n// Create a container\nContainer container = await database.CreateContainerIfNotExistsAsync(id: &quot;&lt;container&gt;&quot;, partitionKeyPath: &quot;/mypartitionkey&quot;, throughput: number);\n\nItemResponse&lt;dynamic&gt; response = await container.ReadItemAsync&lt;dynamic&gt;(id, new PartitionKey(partitionKey));\n\n// Create an item (note that mypartitionkey doesn&#39;t contain leading slash (/))\ndynamic testItem = new { id = &quot;1&quot;, mypartitionkey = &quot;mypartitionvalue&quot;, description = &quot;mydescription&quot; };\nawait container.CreateItemAsync(testItem, new PartitionKey(testItem.mypartitionkey));\n\n// NOTE: This example is for another container\nQueryDefinition query = new QueryDefinition(\n    &quot;select * from sales s where s.AccountNumber = @AccountInput &quot;)\n    .WithParameter(&quot;@AccountInput&quot;, &quot;Account1&quot;);\n\nstring query = $@&quot;\n  SELECT VALUE products\n  FROM models\n  JOIN products in models.Products\n  WHERE products.id = &#39;{id}&#39;\n&quot;;\nFeedIterator&lt;SalesOrder&gt; rs = container.GetItemQueryIterator&lt;SalesOrder&gt;(\n    query,\n    // Optional:\n    // requestOptions: new QueryRequestOptions()\n    // {\n    //     PartitionKey = new PartitionKey(&quot;Account1&quot;),\n    //     MaxItemCount = 1\n    // }\n);\nwhile (rs.HasMoreResults)\n{\n    Model next = await iterator.ReadNextAsync();\n    matches.AddRange(next);\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-6",
        "title": "Consistency Levels",
        "content": "<p>Azure Cosmos DB provides a balanced approach to consistency, availability, and latency. Its globally linearizable consistency (serving requests concurrently) levels remain unaffected by regional settings, operation origins, number of associated regions, or whether your account has one or multiple write regions. 'Read consistency' specifically denotes a singular read operation, scoped within a particular partition-key range or logical partition, initiated by either a remote client or a stored procedure.</p>\n\n<p>!<a href=\"https://learn.microsoft.com/en-us/training/wwl-azure/explore-azure-cosmos-db/media/five-consistency-levels.png\" target=\"_blank\" rel=\"noopener noreferrer\">Image showing data consistency as a spectrum.</a></p>\n\n<ul>\n<li><strong>Strong</strong> - Every reader sees the latest data right away, but it may be slower (higher latency) and less available. ⭐: serious stuff like bank transactions where accuracy is vital. Clients will never receive a partial write.</li>\n<li><strong>Bounded staleness</strong> - Readers may see slightly old data, but there's a limit on how old (determined by number of operations K or the time interval T for staleness - in single-region accounts, the minimum values are 10 write operations or 5 seconds, while in multi-region accounts, they are 100,000 write operations or 300 seconds). Good for things like game leaderboards where a small delay is okay.</li>\n<li><strong>Session</strong> (⏺️, can be configured) - Within a single user's session, the data is always up-to-date. Great for scenarios like a personal shopping cart on a website.</li>\n<li><strong>Consistent prefix</strong> - Readers might be a bit behind, but they always see things in order. Update operations made as a batch within a transaction are always visible together. Good for situations where sequence matters, like following a chain of events.</li>\n<li><strong>Eventual</strong> - Readers might see things out of order (non-consistent) or slightly old, but it eventually catches up. ⭐: when speed and availability are more important than immediate consistency, like a social media like counter. Lowest latency and highest availability.</li>\n</ul>\n<p><pre><code class=\"language-sh\"># Get the default consistency level\naz cosmosdb show --name $database--query defaultConsistencyLevel ...\n\n# Set the default consistency level\naz cosmosdb update --name $database--default-consistency-level &quot;BoundedStaleness&quot; ...</code></pre></p>\n<p><pre><code class=\"language-cs\">ConsistencyLevel defaultConsistencyLevel = cosmosClient.ConsistencyLevel;\ncosmosClient.ConsistencyLevel = ConsistencyLevel.BoundedStaleness;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-7",
        "title": "Partitioning in Cosmos DB",
        "content": "<p>Improves⚡. Enables independent scaling of storage and throughput.</p>\n\n<ul>\n<li><strong>Partition Key</strong>: A property in data used to distribute data across partitions. Critical for performance and scalability. Type: string only.</li>\n<li><strong>Logical Partitions</strong>: Sets of items with the same partition key. Enables efficient queries and transactions. Max storage: 20 GB; Max throughput: 10,000 RU/s.</li>\n<li><strong>Physical Partitions</strong>: Internal resources hosting logical partitions. Cosmos DB auto-splits and merges these for workload balance. Max throughput: 10,000 RU/s.</li>\n<li><strong>Partition Sets</strong>: Groups of physical partitions. Split into subsets for ⚡.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Partitioning Key Selection",
        "content": "<p>Use a key that appears often in your queries' <code>WHERE</code> clause and has many unique (distinct) values to avoid _'hot' partitions_ (overused, or uneven partition sizes) that could become a performance bottleneck. For instance, in multi-tenant apps, using the tenant ID as the key improves read/write speeds and data isolation. Validate your choice through Azure SDKs and monitor metrics like data size, throughput, and cost for any needed adjustments.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Synthetic partition key",
        "content": "<p>When no property has many distinct values:</p>\n\n<ul>\n<li>Concatenate multiple properties of an item</li>\n<li>Use a partition key with a random suffix</li>\n<li>Use a partition key with pre-calculated suffixes</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Request Units (RUs)",
        "content": "<p>RUs measure the cost of operations like read, write, and query. The cost varies based on factors like item size and query complexity. If an operation costs more RUs than you have, it's rate-limited until more RUs are available. Typically, reading a 1-KB document costs 1 RU.</p>\n\n<p>!<a href=\"https://learn.microsoft.com/en-us/training/wwl-azure/explore-azure-cosmos-db/media/request-units.png\" target=\"_blank\" rel=\"noopener noreferrer\">Image showing how database operations consume request units.</a></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Provisioned Throughput",
        "content": "<p>🧊. You set the number of Request Units (RUs) per second your application needs in multiples of 100. Minimum value: 400.</p>\n\n<ul>\n<li><strong>Container-level throughput</strong> (<strong>Dedicated</strong>): Reserves a set amount of processing power (consistent ⚡) for _one container_ (guaranteed by <a href=\"https://www.azure.cn/en-us/support/sla/cosmos-db/\" target=\"_blank\" rel=\"noopener noreferrer\">SLA</a>). ⭐: 🏋🏿 workloads, large data volumes.</li>\n<li><strong>Database-level throughput</strong> (<strong>Shared</strong>): _Multiple containers in the same database_ share processing power. Does not effect containers with dedicated throughput. 🏷️. ⭐: small to large workloads with light/variable traffic, multitenant applications.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/cosmos-db/serverless\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Serverless mode</strong></a>: No need to set throughput in Azure Cosmos DB. You're billed for the RUs used by database operations at the end of the billing cycle.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/cosmos-db/provision-throughput-autoscale\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Autoscale Throughput</strong></a>: Dynamically adjusts provisioned RUs based on current usage, applicable to both single containers and databases. It scales between 10% and 100% of a set maximum (100 to 1000 RU/s), optimizing for unpredictable traffic while maintaining high performance and scale SLAs.</li>\n</ul>\n\n<p><pre><code class=\"language-sh\">az cosmosdb sql container create --throughput-type autoscale --max-throughput 4000</code></pre></p>\n<p><pre><code class=\"language-cs\">await this.cosmosDatabase.CreateContainerAsync(new ContainerProperties(id, partitionKeyPath), ThroughputProperties.CreateAutoscaleThroughput(1000));</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "API Models",
        "content": "<p>All API models return JSON formatted objects, regardless of the API used.</p>\n\n<ul>\n<li><strong>API for NoSQL</strong> - A JSON-based, document-centric API that provides SQL querying capabilities. ⭐: web, mobile, and gaming applications, and anything that requires handling complex _hierarchical data_ with a _schemaless_ design.</li>\n<li><strong>API for MongoDB</strong> - stores data in a document structure, via BSON format.</li>\n<li><strong>API for PostgreSQL</strong> - Stores data either on a single node, or distributed in a multi-node configuration.</li>\n<li><strong>API for Apache Cassandra</strong> - Supports a column-oriented schema, aligns with Apache Cassandra's distributed, scalable NoSQL philosophy, and is wire protocol compatible with it.</li>\n<li><strong>API for Table</strong> - A _key-value_ based API that offers compatibility with Azure Table Storage, overcoming its limitations. ⭐: applications that need a simple schemaless _key-value_ store. Only supports OLTP scenarios.</li>\n<li><strong>API for Apache Gremlin</strong> - _Graph-based_ API for highly _interconnected_ datasets. ⭐: handling dynamic, complexly related data that exceeds the capabilities of relational databases.</li>\n</ul>\n\n<p>Using these APIs, you can emulate various database technologies, modeling real-world data via documents, key-value, graph, and column-family models, minus the management and scaling overheads.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Stored procedures",
        "content": "<p>Azure Cosmos DB allows transactional execution of JavaScript in the form of stored procedures, triggers, and user-defined functions (UDFs). Each needs to be registered prior to calling. They are created and managed in Azure Portal.</p>\n<p><pre><code class=\"language-js\">// Gist\nvar context = getContext(); // root for container and response\n\nvar container = context.getCollection(); // for modifying container (collection)\n// container.createDocument(container.getSelfLink(), documentToCreate, callback);\n// container.queryDocuments(container.getSelfLink(), filterQueryString, updateMetadataCallback);\n// container.replaceDocument(metadataItem._self, metadataItem, callback);\n\nvar response = context.getResponse(); // getting and setting current item\n// response.getBody();\n// request.setBody(itemToCreate);</code></pre></p>\n<ul>\n<li><strong>Stored Procedures</strong>: JavaScript functions registered to a collection (container), enabling CRUD and query tasks on its documents. They run within a time limit and support transactions via \"continuation tokens\". Functions like <code>collection.createDocument()</code> return a <code>Boolean</code> indicating operation success.</li>\n</ul>\n\n<p><pre><code class=\"language-js\">var helloWorldStoredProc = {\n    id: &quot;helloWorld&quot;,\n    serverScript: function () {\n      // context provides access to all operations that can be performed in Azure Cosmos DB\n      // and access to the request and response objects\n      var context = getContext();\n      var response = context.getResponse();\n\n      response.setBody(&quot;Hello, World&quot;);\n    },\n  };</code></pre></p>\n<p><pre><code class=\"language-js\">var createDocumentStoredProc = {\n    id: &quot;createMyDocument&quot;,\n    // This stored procedure creates a new item in the Azure Cosmos container\n    body: function createMyDocument(documentToCreate) {\n      var context = getContext();\n      var container = context.getCollection();\n\n      // Async &#39;createDocument&#39; operation, depends on JavaScript callbacks\n      // returns true if creation was successful\n      var accepted = container.createDocument(\n        container.getSelfLink(),\n        documentToCreate,\n        // Callback function with error and created document parameters\n        function (err, documentCreated) {\n          // Handle or throw error inside the callback\n          if (err) throw new Error(&quot;Error&quot; + err.message);\n          // Return the id of the newly created document\n          context.getResponse().setBody(documentCreated.id);\n        }\n      );\n\n      // If the document creation was not accepted, return\n      if (!accepted) return;\n    },\n  };</code></pre></p>\n<p><pre><code class=\"language-js\">// Parameter is always string!\n  function sample(arr) {\n    if (typeof arr === &quot;string&quot;) arr = JSON.parse(arr);\n\n    arr.forEach(function (a) {\n      // do something here\n      console.log(a);\n    });\n  }</code></pre></p>\n<ul>\n<li><strong>Triggers</strong>: Pretriggers and post-triggers operate before and after a database item modification, respectively. They aren't automatically executed, and must be registered and specified for each operation where execution is required.</li>\n</ul>\n\n<ul>\n<li><strong>Pre-triggers</strong>: Can't have any input parameters. Validates properties of an item that is being created, modifies properties (ex: add a timestamp of an item to be created).</li>\n<li><strong>Post-triggers</strong>: Runs as part of the same transaction for the underlying item itself. Modifies properties (ex: update metadata of newly created item).</li>\n</ul>\n\n<p><pre><code class=\"language-js\">// Pretrigger\n  function validateToDoItemTimestamp() {\n    var context = getContext();\n    var request = context.getRequest();\n\n    // item to be created in the current operation\n    var itemToCreate = request.getBody();\n\n    // validate properties\n    if (!(&quot;timestamp&quot; in itemToCreate)) {\n      var ts = new Date();\n      itemToCreate[&quot;timestamp&quot;] = ts.getTime();\n    }\n\n    // update the item that will be created\n    request.setBody(itemToCreate);\n  }\n\n  // Posttrigger\n  function updateMetadata() {\n    var context = getContext();\n    var container = context.getCollection();\n    var response = context.getResponse();\n\n    // item that was created\n    var createdItem = response.getBody();\n\n    // query for metadata document\n    var filterQuery = &#39;SELECT * FROM root r WHERE r.id = &quot;_metadata&quot;&#39;;\n    var accept = container.queryDocuments(\n      container.getSelfLink(),\n      filterQuery,\n      updateMetadataCallback\n    );\n    if (!accept) throw &quot;Unable to update metadata, abort&quot;;\n\n    function updateMetadataCallback(err, items, responseOptions) {\n      if (err) throw new Error(&quot;Error&quot; + err.message);\n      if (items.length != 1) throw &quot;Unable to find metadata document&quot;;\n\n      var metadataItem = items[0];\n\n      // update metadata\n      metadataItem.createdItems += 1;\n      metadataItem.createdNames += &quot; &quot; + createdItem.id;\n      var accept = container.replaceDocument(\n        metadataItem._self,\n        metadataItem,\n        function (err, itemReplaced) {\n          if (err) throw &quot;Unable to update metadata, abort&quot;;\n        }\n      );\n      if (!accept) throw &quot;Unable to update metadata, abort&quot;;\n      return;\n    }\n  }</code></pre></p>\n<ul>\n<li><strong>User-defined functions (UDFs)</strong>: These are functions used within a query, such as a function to calculate income tax based on different brackets.</li>\n</ul>\n\n<p><pre><code class=\"language-js\">function tax(income) {\n    if (income == undefined) throw &quot;no input&quot;;\n\n    if (income &lt; 1000) return income * 0.1;\n    else if (income &lt; 10000) return income * 0.2;\n    else return income * 0.4;\n  }</code></pre></p>\n<p>Cosmos DB operations must complete within a limited time frame.</p>",
        "type": "content",
        "estimatedReadTime": 4
      },
      {
        "id": "section-14",
        "title": "Register and use stored procedures, triggers, and user-defined functions",
        "content": "<p>Registering pre/post trigger uses <code>TriggerProperties</code> class with specific <code>TriggerType</code>. Calling them is a matter of using <code>ItemRequestOptions</code> with proper property and <code>new List<string> { \"<name-of-registered-trigger>\" } }</code>.</p>\n<p><pre><code class=\"language-cs\">var container = await client.GetContainer(&quot;db&quot;, &quot;container&quot;);\n\n// Register Stored Procedure\ncontainer.Scripts.CreateStoredProcedureAsync(new StoredProcedureProperties { Id = &quot;spCreateToDoItems&quot;, Body = File.ReadAllText(&quot;sp.js&quot;) });\n\n// Call Stored Procedure\ndynamic[] items = { new { category = &quot;Personal&quot;, name = &quot;Groceries&quot; } };\ncontainer.Scripts.ExecuteStoredProcedureAsync&lt;string&gt;(&quot;spCreateToDoItem&quot;, new PartitionKey(&quot;Personal&quot;), new[] { items });\n\n// Register Pretrigger\ncontainer.Scripts.CreateTriggerAsync(new TriggerProperties { Id = &quot;preTrigger&quot;, Body = File.ReadAllText(&quot;preTrigger.js&quot;), TriggerOperation = TriggerOperation.Create, TriggerType = TriggerType.Pre });\n\n// Call Pretrigger\ndynamic newItem = new { category = &quot;Personal&quot;, name = &quot;Groceries&quot; };\ncontainer.CreateItemAsync(newItem, null, new ItemRequestOptions { PreTriggers = new List&lt;string&gt; { &quot;preTrigger&quot; } });\n\n// Register Post-trigger\ncontainer.Scripts.CreateTriggerAsync(new TriggerProperties { Id = &quot;postTrigger&quot;, Body = File.ReadAllText(&quot;postTrigger.js&quot;), TriggerOperation = TriggerOperation.Create, TriggerType = TriggerType.Post });\n\n// Call Post-trigger\ncontainer.CreateItemAsync(newItem, null, new ItemRequestOptions { PostTriggers = new List&lt;string&gt; { &quot;postTrigger&quot; } });\n\n// Register UDF\ncontainer.Scripts.CreateUserDefinedFunctionAsync(new UserDefinedFunctionProperties { Id = &quot;Tax&quot;, Body = File.ReadAllText(&quot;Tax.js&quot;) });\n\n// Call UDF\nvar iterator = container.GetItemQueryIterator&lt;dynamic&gt;(&quot;SELECT * FROM Incomes t WHERE udf.Tax(t.income) &gt; 20000&quot;);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Azure Cosmos DB Change Feed",
        "content": "<p>Enabled by default, tracking container changes chronologically (<strong>order is guaranteed only per partition key</strong>) but not deletions. For deletions, use a \"deleted\" attribute and set TTL. Azure Functions uses the change feed processor.</p>\n\n<p>Azure Functions utilizes the change feed processor internally.</p>\n<p>Not compatible with Table and PostgreSQL databases.</p>\n\n<p>Interaction Models:</p>\n\n<ul>\n<li><strong>Push Model</strong>: Automatically sends updates to the client. ⭐.</li>\n<li><strong>Pull Model</strong>: Requires manual client requests for updates. Useful for specialized tasks like data migration or controlling processing speed.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "Change feed processor",
        "content": "<p>Host instance lifecycle: Reads change feed, sleeps if no changes, sends changes to delegate for processing, and updates lease store with latest processed time.</p>\n\n<ul>\n<li>Monitored container: has the data from which the change feed is generated. Inserts and updates are reflected in the change feed.</li>\n<li>Lease container: acts as a state storage and coordinate the processing of change feed across multiple workers. It can be in the same or different account as the monitored container.</li>\n<li>Delegate componet can be used to implement custom logic to process the changes that the change feed reads.</li>\n<li>Compute Instance: Hosts change feed processor to listen for changes. Can be a VM, Kubernetes pod, Azure App Service instance, or a physical machine.</li>\n</ul>\n<p><pre><code class=\"language-cs\">private static async Task&lt;ChangeFeedProcessor&gt; StartChangeFeedProcessorAsync(CosmosClient cosmosClient)\n{\n    Container monitoredContainer = cosmosClient.GetContainer(&quot;databaseName&quot;, &quot;monitoredContainerName&quot;);\n    Container leaseContainer = cosmosClient.GetContainer(&quot;databaseName&quot;, &quot;leaseContainerName&quot;);\n\n    ChangeFeedProcessor changeFeedProcessor = monitoredContainer\n        .GetChangeFeedProcessorBuilder&lt;ToDoItem&gt;(processorName: &quot;changeFeedSample&quot;, onChangesDelegate: DelagateHandleChangesAsync)\n            .WithInstanceName(&quot;consoleHost&quot;) // Compute Instance\n            .WithLeaseContainer(leaseContainer)\n            .Build();\n\n    Console.WriteLine(&quot;Starting Change Feed Processor...&quot;);\n    await changeFeedProcessor.StartAsync();\n    Console.WriteLine(&quot;Change Feed Processor started.&quot;);\n    return changeFeedProcessor;\n}\n\n//////////////////\n// The delegate //\n//////////////////\nstatic async Task HandleChangesAsync(\n    ChangeFeedProcessorContext context,\n    IReadOnlyCollection&lt;ToDoItem&gt; changes,\n    CancellationToken cancellationToken)\n{\n    Console.WriteLine(__CODEBLOCK_0__quot;Started handling changes for lease {context.LeaseToken}...&quot;);\n    Console.WriteLine(__CODEBLOCK_0__quot;Change Feed request consumed {context.Headers.RequestCharge} RU.&quot;);\n    // SessionToken if needed to enforce Session consistency on another client instance\n    Console.WriteLine(__CODEBLOCK_0__quot;SessionToken ${context.Headers.Session}&quot;);\n\n    foreach (ToDoItem item in changes)\n    {\n        Console.WriteLine(__CODEBLOCK_0__quot;Detected operation for item with id {item.id}.&quot;);\n        await Task.Delay(10);\n    }\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-17",
        "title": "Querying data",
        "content": "<a href=\"https://cosmosdb.github.io/labs/dotnet/labs/03-querying_in_azure_cosmosdb.html\" target=\"_blank\" rel=\"noopener noreferrer\">More</a>\n\n<ul>\n<li>Data in Azure Cosmos DB is stored as JSON documents. This means you can query nested properties and arrays directly.</li>\n<li>Queries in Azure Cosmos DB are case sensitive.</li>\n<li>Azure Cosmos DB automatically <strong>indexes all properties</strong> in your data (configurable: <code>containerProperties.IndexingPolicy.ExcludedPaths.Add(new ExcludedPath{ Path = \"/nonQueriedProperty/*\" });</code> to exclude property you never query on). This makes queries fast, but it can also increase the cost of writes.</li>\n<li>Azure Cosmos DB supports ACID transactions within a single partition.</li>\n<li>Azure Cosmos DB uses optimistic concurrency control to prevent conflicts when multiple clients are trying to update the same data. This is done using <code>ETags</code> and HTTP headers.</li>\n</ul>\n<p><pre><code class=\"language-sql\">SELECT\n  c.name,\n  c.age,\n  {\n    &quot;phoneNumber&quot;: p.number,\n    &quot;phoneType&quot;: p.type\n  } AS phoneInfo\nFROM c\nJOIN p IN c.phones\nJOIN (SELECT VALUE t FROM t IN p.tags WHERE t.name IN (&quot;winter&quot;, &quot;fall&quot;))\nWHERE c.age &gt; 21 AND ARRAY_CONTAINS(c.tags, &#39;student&#39;) AND STARTSWITH(p.number, &#39;123&#39;)\nORDER BY c.age DESC\nOFFSET 10 LIMIT 20</code></pre></p>\n<ul>\n<li>Column names <strong>require</strong> specifiers, e.g. <code>c.name</code>, <strong>not</strong> <code>name</code>.</li>\n<li><code>FROM</code> clause is just an alias (no need to specify container name).</li>\n<li>You can only join within a single container. You can't join data across different containers.</li>\n<li>Aggregation functions are not supported.</li>\n</ul>\n\n<p>Queries that have an <code>ORDER BY</code> clause with two or more properties require a <a href=\"https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy\" target=\"_blank\" rel=\"noopener noreferrer\">composite index</a>:</p>\n<p><pre><code class=\"language-json\">{\n  &quot;compositeIndexes&quot;: [\n    [\n      { &quot;path&quot;: &quot;/name&quot;, &quot;order&quot;: &quot;ascending&quot; },\n      { &quot;path&quot;: &quot;/age&quot;, &quot;order&quot;: &quot;descending&quot; }\n    ]\n  ]\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-18",
        "title": "Flattening data",
        "content": "<p>The <code>VALUE</code> keyword is used to flatten the result of a <code>SELECT</code> statement (not individual fields within that statement)</p>\n<p><pre><code class=\"language-sql\">SELECT VALUE {\n  &quot;name&quot;: p.name,\n  &quot;sku&quot;: p.sku,\n  &quot;vendor&quot;: p.manufacturer.name\n}\nFROM products p\nWHERE p.sku = &quot;teapo-surfboard-72109&quot;</code></pre></p>\n<p>This is similar to aliasing <code>SELECT p.name AS name</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-19",
        "title": "Using UDF",
        "content": "<p><pre><code class=\"language-sql\">SELECT c.id, udf.GetMaxNutritionValue(c.nutrients) AS MaxNutritionValue FROM c</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Connectivity modes",
        "content": "<ul>\n<li><strong>Gateway mode</strong> (⏺️): For environments that have a limited number of socket connections, or corporate network with strict firewall restrictions. It uses HTTPS port and a single DNS endpoint.</li>\n</ul>\n\n<ul>\n<li><strong>Direct mode</strong>: Connectivity through TCP protocol, using TLS for initial authentication and encryption. ⚡</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "Performance and best practices",
        "content": "<ul>\n<li>Latest SDK version</li>\n<li>Application must be in the same Azure region as the Cosmos DB account</li>\n<li>Use single instance of <code>CosmosClient</code></li>\n<li><code>Direct</code> mode for ⚡</li>\n<li>Leverage <code>PartitionKey</code> for efficient point reads and writes</li>\n<li>Retry logic for handling transient errors</li>\n<li>Read 🏋🏿: <code>Stream API</code> and <code>FeedIterator</code></li>\n<li>Write 🏋🏿: Enable bulk support, set <code>EnableContentResponseOnWrite</code> to false, exclude unused paths from indexing and keep the size of your documents minimal</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-22",
        "title": "Global Distribution",
        "content": "<ul>\n<li><strong>Multi-region Writes</strong> - Perform writes in all configured regions. This enhances write latency and availability.</li>\n<li><strong>Automatic Failover</strong> - If an Azure region goes down, Cosmos DB can automatically failover to another region.</li>\n<li><strong>Manual Failover</strong> - For testing purposes, you can trigger a manual failover to see how your application behaves during regional failures.</li>\n<li><strong>No downtime when adding or removing regions</strong></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-23",
        "title": "Conflict resolution",
        "content": "<p>🧊, conflict resolution policy can only be specified at container creation time.</p>\n\n<ul>\n<li><strong>Automatic</strong>: Uses a Last Writer Wins (LWW) policy based on a system or user-defined property.</li>\n<li><strong>Custom</strong>: Uses a user-defined stored procedure to handle conflicts.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-24",
        "title": "Security",
        "content": "<ul>\n<li><strong>Authentication</strong>: Utilizes Entra and generates an access key upon account creation for request authentication.</li>\n<li><strong>Authorization</strong>: Role-based with built-in resources for granular control over containers and documents.</li>\n<li><strong>Encryption</strong>: 🔑 (⏺️) or 🗝️ for at-rest data; TLS for in-transit data.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-25",
        "title": "Azure Cosmos DB Backup & Restore",
        "content": "<p>Regular automatic secure (🔑) backups without affecting performance. Restores are limited to accounts in the same subscription with equal or higher RU/s and partitions.</p>\n\n<ul>\n<li><strong>Continuous</strong>: 7 or 30-day retention. Can't switch to periodic.</li>\n<li><strong>Periodic</strong>: ⏺️. Custom intervals (min 1 hour), max retention: 1 month. Support team handles restores.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-26",
        "title": "Monitoring and Diagnostics",
        "content": "<ul>\n<li>Metrics: Built-in tracking for aspects like storage, latency, and availability.</li>\n<li>Azure Monitor: Enables custom dashboards, alerts, and metric visualization.</li>\n<li>Diagnostic Logs: Offers operation traces, which can be analyzed further in various Azure services.</li>\n<li>Query Stats: Provides execution metrics to help optimize and troubleshoot queries.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "App Service",
      "Azure Portal",
      "Containers",
      "Events"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/training/wwl-azure/explore-azure-cosmos-db/media/cosmos-entities.png",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "entra-id",
    "topic": "entra-id",
    "title": "Microsoft Entra ID",
    "description": "Implements OAuth 2.0 authorization protocol, allowing third-party apps to access web-hosted resources on behalf of users. These resources have a unique _application ID URI_.",
    "difficulty": "Beginner",
    "estimatedReadTime": 27,
    "tags": [
      "Entra ID",
      "App Service",
      "API Management",
      "PowerShell",
      "CLI",
      "ARM"
    ],
    "learningObjectives": [
      "A 1:1 relationship with the Software Application.",
      "Application: Created when an app gains resource access permissions.",
      "Managed Identity: Automatically created when enabled. It grants access but is not directly modifiable.",
      "Legacy: For apps created before modern registration methods, restricted to the tenant where created.",
      "Manages token cache and refreshes tokens automatically."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Knowledge of identity and access management principles",
      "Experience with REST APIs and HTTP protocols"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Implements <a href=\"https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols\" target=\"_blank\" rel=\"noopener noreferrer\">OAuth 2.0</a> authorization protocol, allowing third-party apps to access web-hosted resources on behalf of users. These resources have a unique _application ID URI_.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Microsoft Entra ID vs Role-Based Access Control (RBAC)",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Entra ID</th>\n      <th>Azure RBAC</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Purpose</strong></td>\n      <td>Authentication. Identity & Access Management</td>\n      <td>Authorization</td>\n    </tr>\n    <tr>\n      <td><strong>Focus</strong></td>\n      <td>Entra ID Resources</td>\n      <td>Azure Resources</td>\n    </tr>\n    <tr>\n      <td><strong>Scope</strong></td>\n      <td>Tenant</td>\n      <td>Management Group, Subscription, Resource Group, Resource</td>\n    </tr>\n    <tr>\n      <td><strong>Roles</strong></td>\n      <td>Global, User, Billing Admins; Custom roles; Multiple roles per user</td>\n      <td>Owner, Contributor, Reader, User Access Admin; Custom roles (P1/P2); Multiple roles per user</td>\n    </tr>\n    <tr>\n      <td><strong>Access Via</strong></td>\n      <td>Azure Portal, MS 365 Admin, Graph, PowerShell</td>\n      <td>Azure Portal, CLI, PowerShell, ARM templates, REST API</td>\n    </tr>\n    <tr>\n      <td><strong>Pricing</strong></td>\n      <td>Free, P1, P2 (Monthly charged)</td>\n      <td>Free (With Azure subscription)</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Use case: App Service web app accessing Microsoft Graph API (or other service)",
        "content": "<ul>\n<li>For multi-tenant applications, an _application service principal_ is utilized to grant permissions. This enables the app to access Microsoft Graph API resources across multiple tenants without relying on a specific user identity.</li>\n<li>For single-tenant scenarios where the app only needs to access resources within a specific tenant, a _Managed Identity_ could be more appropriate.</li>\n<li>When the app needs to perform actions specific to an individual user (_on behalf of the user_), delegated permissions are used, requiring user authentication and consent.</li>\n<li>If the permissions required by the application can change dynamically based on runtime conditions, leveraging _Entra ID roles and policies_ would be more suitable.</li>\n<li>For short-lived operations that don't require persistent permissions, _token-based or key-based temporary access methods_ could be more fitting.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Application Registration",
        "content": "<p>All applications _must <a href=\"https://learn.microsoft.com/en-us/azure/app-service/configure-authentication-provider-aad?tabs=workforce-tenant\" target=\"_blank\" rel=\"noopener noreferrer\">register with Entra ID</a>_ to delegate identity and access management: <code>Portal > app > 'Authentication' > 'Add identity provider' > set provider to Microsoft > 'Add'</code>. This creates an application object and a globally unique ID (app/client ID).</p>\n\n<ul>\n<li><strong>Application Object</strong>: Resides in the Entra ID tenant where the app is registered. It serves as the _global representation_ of your application for use across all tenants. This object has:</li>\n</ul>\n\n<ul>\n<li>A 1:1 relationship with the Software Application.</li>\n<li>A 1:N relationship with _Service Principal Objects_, meaning one Application Object can have multiple corresponding _Service Principal Objects_.</li>\n</ul>\n\n<ul>\n<li><strong><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals?tabs=browser\" target=\"_blank\" rel=\"noopener noreferrer\">Service principals</a> Objects</strong>: These are _local representations_ within each tenant (use <strong>Enterprise applications</strong> page in the Azure portal to manage). They are derived from the Application Object and come in three types:</li>\n<li><strong>Application</strong>: Created when an app gains resource access permissions.</li>\n<li><strong>Managed Identity</strong>: Automatically created when enabled. It grants access but is not directly modifiable.</li>\n<li><strong>Legacy</strong>: For apps created before modern registration methods, restricted to the tenant where created.</li>\n</ul>\n\n<p>Changes to your application object also affect its service principals in the home tenant only. Deleting the application also deletes its home tenant service principal, but restoring that application object won't recover its service principals.</p>\n\n<p>List service principals associated with an app: <code>az ad sp list --filter \"appId eq '{AppId}'\"</code></p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-overview\" target=\"_blank\" rel=\"noopener noreferrer\">Integrate authentication and authorization</a></th>\n      <th>Web App</th>\n      <th>Backend API</th>\n      <th>Daemon</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1. Register in Entra ID</td>\n      <td>✓</td>\n      <td>✓</td>\n      <td>✓</td>\n    </tr>\n    <tr>\n      <td>2. Configure app with code sample</td>\n      <td>✕</td>\n      <td>✓</td>\n      <td>✕</td>\n    </tr>\n    <tr>\n      <td>3. Validate token</td>\n      <td>ID</td>\n      <td>Access</td>\n      <td>✕</td>\n    </tr>\n    <tr>\n      <td>4. Configure secrets & certificates</td>\n      <td>✓</td>\n      <td>✓</td>\n      <td>✓</td>\n    </tr>\n    <tr>\n      <td>5. Configure permission & call API of choice</td>\n      <td>✓</td>\n      <td>✓</td>\n      <td>✓</td>\n    </tr>\n    <tr>\n      <td>6. Control access (authorization)</td>\n      <td>✓</td>\n      <td>✓ (add <code>validate-jwt</code> policy to validate the OAuth token)</td>\n      <td>✕</td>\n    </tr>\n    <tr>\n      <td>7. Store token cache</td>\n      <td>✓</td>\n      <td>✓</td>\n      <td>✓</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>To <a href=\"https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-protect-backend-with-aad\" target=\"_blank\" rel=\"noopener noreferrer\">protect an API in Azure API Management</a>, register both the backend API and web app, configure permissions to allow the web app to call the backend API (<code>az ad app permission add --id <WebApp-Application-Id> --api <Backend-API-Application-Id> --api-permissions <Permission-Id>=Scope</code>), and enable OAuth 2.0 user authorization along with adding the <code>validate-jwt</code> policy for token validation.</p>\n\n<ul>\n<li><code><Permission-Id>=Scope</code>: Delegated permissions</li>\n<li><code><Permission-Id>=Role</code>: Application permissions</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 3
      },
      {
        "id": "section-5",
        "title": "Permissions (Scopes)",
        "content": "<p>The app specifies required permissions using the <code>scope</code> query parameter, which defines the resource type. If unspecified, the default resource is Microsoft Graph. For instance, <code>scope=User.Read</code> is the same as <code><a href=\"https://graph.microsoft.com/User.Read\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/User.Read</a></code>.</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Permission types</th>\n      <th>Delegated permissions</th>\n      <th>Application permissions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Access context</td>\n      <td>Get access on behalf of a user (a signed-in user is present)</td>\n      <td>Get access without a user (signed-in user)</td>\n    </tr>\n    <tr>\n      <td>Types of apps</td>\n      <td>Web / Mobile / single-page app (SPA)</td>\n      <td>Web / Daemon / Background services</td>\n    </tr>\n    <tr>\n      <td>Other names</td>\n      <td>Scopes / OAuth2 permission scopes</td>\n      <td>App / App-only permissions roles</td>\n    </tr>\n    <tr>\n      <td>Who can consent</td>\n      <td>- Users can consent for their data<br>- Admins can consent for all users</td>\n      <td>Only admin can consent</td>\n    </tr>\n    <tr>\n      <td>Consent methods</td>\n      <td>Static or Dynamic</td>\n      <td>Static ONLY</td>\n    </tr>\n  </tbody>\n</table>\n\n<code>az ad app permission add --id {appId} --api {apiID} --api-permissions {permissionId}={Scope,Role}</code>\n\n<ul>\n<li>Scope: Defines <strong>what the application is allowed to do</strong> on behalf of a user.</li>\n<li>Role: Defines more privileged <strong>operations that the application can perform</strong>, often without a user</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Consent",
        "content": "<ul>\n<li><strong>Static user consent</strong>: Requires all permissions to be specified in the Azure portal during app registration. Users or admins are prompted for consent if not previously granted. Issues: requires long lists of permissions and knowing all resources in advance.</li>\n<li><strong>Incremental (Dynamic) user consent</strong>: Allows permissions to be requested gradually. Scopes can be specified during runtime without predefinition in Azure portal.</li>\n<li><strong>Admin consent</strong>: needed for high-privilege permissions. Admins authorize apps to access privileged data. Requires static permissions registration. <code>az ad app permission admin-consent</code></li>\n</ul>\n\n<p>Requesting individual user consent:</p>\n<p><pre><code class=\"language-http\">GET https://login.microsoftonline.com/common/oauth2/v2.0/authorize?\nclient_id=00001111-aaaa-2222-bbbb-3333cccc4444\n&amp;response_type=code\n&amp;redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F\n&amp;response_mode=query\n&amp;scope=https%3A%2F%2Fgraph.microsoft.com%2Fcalendars.read%20https%3A%2F%2Fgraph.microsoft.com%2Fmail.send\n&amp;state=12345</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Conditional Access (Premium P1 tier)",
        "content": "<ul>\n<li>Prompt additional verification (e.g., second password or fingerprint) when users sign in</li>\n<li>Using a middle tier to solve a \"challenge\" presented by API</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-mfa-licensing\" target=\"_blank\" rel=\"noopener noreferrer\">Multi-Factor Authentication</a> (<strong>all Microsoft 365 plans</strong>). When <a href=\"https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/security-defaults\" target=\"_blank\" rel=\"noopener noreferrer\">Security Defaults</a> is enabled, MFA is activated for <strong>all users</strong>. To apply MFA to specific users only, _disable Security Defaults_.</li>\n<li>Risk-based policies (require Entra ID Identity Protection - <strong>Premium P2</strong> tier)</li>\n<li>Device restrictions (enrolled in Microsoft's Intune service)</li>\n<li>Certain physical locations or IP ranges</li>\n</ul>\n\n<p>When Conditional Access licenses expire, policies stay active but can't be updated.</p>\n\n<p>Apps don't need to be changed, unless they need silent or indirect services access, or on-behalf-of flow.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Other Entra ID features",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/active-directory-b2c/overview\" target=\"_blank\" rel=\"noopener noreferrer\">Entra ID B2C</a> supports multiple login methods, including social media, email/password.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/external-identities/what-is-b2b\" target=\"_blank\" rel=\"noopener noreferrer\">Entra ID B2B</a> allows you to share your company's applications with external users in a secure manner.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/app-proxy/what-is-application-proxy\" target=\"_blank\" rel=\"noopener noreferrer\">Entra ID Application Proxy</a> provides secure remote access to on-premises applications.</li>\n<li><a href=\"https://en.wikipedia.org/wiki/Azure_AD_Connect\" target=\"_blank\" rel=\"noopener noreferrer\">Entra ID Connect</a> allows you to synchronize an AD tenant with an on-premises AD domain.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal\" target=\"_blank\" rel=\"noopener noreferrer\">Entra ID Enterprise Application</a> allow you to integrate other applications with Entra ID, including your own apps.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "MSAL (Microsoft Authentication Library)",
        "content": "<p>Enables secure access to various APIs, with a unified API across platforms.</p>\n\n<ul>\n<li>Obtains tokens for users or applications (when applicable).</li>\n<li>Manages token cache and refreshes tokens automatically.</li>\n<li>Helps specify the desired audience for application sign-in.</li>\n<li>Assists with application setup from configuration files.</li>\n<li>Provides actionable exceptions, logging, and telemetry for troubleshooting.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Authentication flows",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Flow</th>\n      <th>Application Type</th>\n      <th>Use Case</th>\n      <th>Token Acquisition Method</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Authorization code</td>\n      <td>Both</td>\n      <td>SPA, Native, Web Apps</td>\n      <td>Exchanges an authorization code for a token</td>\n    </tr>\n    <tr>\n      <td>Client credentials</td>\n      <td>Confidential</td>\n      <td>Daemon, Backend</td>\n      <td>App Secret/Certificate</td>\n    </tr>\n    <tr>\n      <td>On-behalf-of</td>\n      <td>Both</td>\n      <td>Service-to-Service, Service-to-API, Microservices</td>\n      <td>Uses an existing token to get another</td>\n    </tr>\n    <tr>\n      <td>Device code</td>\n      <td>Public</td>\n      <td>IoT, CLI</td>\n      <td>Polls the endpoint until user authenticates</td>\n    </tr>\n    <tr>\n      <td>Implicit</td>\n      <td>Public</td>\n      <td>Legacy SPAs</td>\n      <td>Token in URI fragment</td>\n    </tr>\n    <tr>\n      <td>Integrated Windows</td>\n      <td>Both</td>\n      <td>Intranet Apps</td>\n      <td>Auto auth on domain / Entra ID-joined PCs</td>\n    </tr>\n    <tr>\n      <td>Interactive</td>\n      <td>Public</td>\n      <td>User Interactive Apps</td>\n      <td>Requires user action</td>\n    </tr>\n    <tr>\n      <td>Username/password</td>\n      <td>Both</td>\n      <td>Legacy, Testing</td>\n      <td>Direct with Credentials</td>\n    </tr>\n  </tbody>\n</table>\n\n<ul>\n<li><strong>Public client applications</strong>: User-facing apps without the ability to securely store secrets. They interact with web APIs on the user's behalf.</li>\n<li><strong>Confidential client applications</strong>: Server-based apps and daemons that can securely handle secrets. Each instance maintains a unique configuration, including identifiers and secrets.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Working with MSAL",
        "content": "<p>When building web apps or public client apps that require a broker, ensure to set the <code>redirectUri</code>. This URL is used by the identity provider to return security tokens to your application.</p>\n\n<p>Integrating Entra ID authentication into an ASP.NET Core application:</p>\n<p><pre><code class=\"language-cs\">builder.Services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)\n  .AddMicrosoftIdentityWebApp(builder.Configuration.GetSection(&quot;AzureAd&quot;));\n\nbuilder.Services.AddRazorPages()\n  .AddMicrosoftIdentityUI();\n\n// OpenIdConnectDefaults.AuthenticationScheme: Enables OpenID Connect authentication, best for OAuth 2.0 and Single Sign-On (SSO).\n// JwtBearerDefaults.AuthenticationScheme: Used for authenticating APIs via JSON Web Tokens (JWT), suitable for stateless and scalable APIs.\n// CookieAuthenticationDefaults.AuthenticationScheme: Employs cookies for session-based authentication, optimal for traditional web apps that manage user sessions server-side.\n// Custom Authentication Scheme: Allows for custom string identifiers for authentication middleware, ideal for specialized or unique authentication scenarios.</code></pre></p>\n<p><pre><code class=\"language-cs\">// Sign in users in the Microsoft Azure public cloud using their work and school accounts or personal Microsoft accounts.\nIPublicClientApplication app = PublicClientApplicationBuilder.Create(clientId).Build();\n\n// Confidential application that handles tokens from Microsoft Azure users using a shared client secret for identification.\n// Example: A daemon application that does not interact with the user and acts on its own behalf, like a service accessing Graph API\nIConfidentialClientApplication app = ConfidentialClientApplicationBuilder.Create(clientId)\n    .WithClientSecret(clientSecret)\n    .WithRedirectUri(redirectUri )\n    .Build();</code></pre></p>\n<p>Common modifiers:</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Modifier</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>.WithAuthority()</code></td>\n      <td>Sets the application default authority to an Microsoft Entra ID authority, with the possibility of choosing the Azure Cloud, the audience, the tenant (tenant ID or domain name), or providing directly the authority URI. Example: <code>.WithAuthority(AzureCloudInstance.AzurePublic, _tenantId)</code></td>\n    </tr>\n    <tr>\n      <td><code>.WithTenantId(string tenantId)</code></td>\n      <td>Overrides the tenant ID, or the tenant description.</td>\n    </tr>\n    <tr>\n      <td><code>.WithClientId(string)</code></td>\n      <td>Overrides the client ID.</td>\n    </tr>\n    <tr>\n      <td><code>.WithRedirectUri(string redirectUri)</code></td>\n      <td>Overrides the default redirect URI (ex: for scenarios requiring a broker)</td>\n    </tr>\n    <tr>\n      <td><code>.WithComponent(string)</code></td>\n      <td>Sets the name of the library using MSAL.NET (for telemetry reasons).</td>\n    </tr>\n    <tr>\n      <td><code>.WithDebugLoggingCallback()</code></td>\n      <td>If called, the application calls Debug.Write simply enabling debugging traces.</td>\n    </tr>\n    <tr>\n      <td><code>.WithLogging()</code></td>\n      <td>If called, the application calls a callback with debugging traces.</td>\n    </tr>\n    <tr>\n      <td><code>.WithTelemetry(TelemetryCallback telemetryCallback)</code></td>\n      <td>Sets the delegate used to send telemetry.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Confidential client application only:</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Modifier</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>.WithCertificate(X509Certificate2 certificate)</code></td>\n      <td>Sets the certificate identifying the application with Microsoft Entra ID.</td>\n    </tr>\n    <tr>\n      <td><code>.WithClientSecret(string clientSecret)</code></td>\n      <td>Sets the client secret (app password) identifying the application with Microsoft Entra ID.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Acquiring Token:</p>\n<p><pre><code class=\"language-cs\">string[] scopes = { &quot;user.read&quot; };\nAuthenticationResult result = await app.AcquireTokenInteractive(scopes).ExecuteAsync();\nConsole.WriteLine(__CODEBLOCK_2__quot;Token: {result.AccessToken}&quot;);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-12",
        "title": "Application manifest",
        "content": "<p>An Entra ID application manifest configures an app's identity and attributes, facilitating OAuth authorization and user consent. It serves as a mechanism for updating the application object in the Microsoft identity platform.</p>\n\n<ul>\n<li><code>signInAudience</code>:</li>\n</ul>\n\n<ul>\n<li><code>AzureADMyOrg</code> - Users with a Microsoft work or school account in my organization's Microsoft Entra tenant (for example, single tenant)</li>\n<li><code>AzureADMultipleOrgs</code> - Users with a Microsoft work or school account in any organization's Microsoft Entra tenant (for example, multi-tenant)</li>\n<li><code>AzureADandPersonalMicrosoftAccount</code> - Users with a personal Microsoft account, or a work or school account in any organization's Microsoft Entra tenant</li>\n<li><code>PersonalMicrosoftAccount</code> - Personal accounts that are used to sign in to services like Xbox and Skype.</li>\n</ul>\n\n<ul>\n<li><code>groupMembershipClaims</code>: (_Tenant-specific_) Groups claim issued in access token that the app expects. Groups persist even after the associated app is removed.</li>\n</ul>\n\n<ul>\n<li>\"None\"</li>\n<li>\"SecurityGroup\" (will include security groups and Entra ID roles)</li>\n<li>\"ApplicationGroup\" (this option includes only groups that are assigned to the application)</li>\n<li>\"DirectoryRole\" (gets the Entra ID directory roles the user is a member of)</li>\n<li>\"All\" (this will get all of the security groups, distribution groups, and Entra ID directory roles that the signed-in user is a member of).</li>\n</ul>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-apps\" target=\"_blank\" rel=\"noopener noreferrer\"><code>appRoles</code></a> (_Application-specific_): Collection of roles that an app may declare. Defined in the app registration, and will get removed with it. Correspond to <code>Role</code> in <code>--api-permissions</code></li>\n</ul>\n\n<p><pre><code class=\"language-jsonc\">&quot;appRoles&quot;: [{\n      &quot;allowedMemberTypes&quot;: [ &quot;User&quot; ],\n      &quot;value&quot;: &quot;ReadOnly&quot; // expected value of the roles claim in the token, which must match the string in the application&#39;s code without spaces.\n  }]</code></pre></p>\n<ul>\n<li><code>oauth2Permissions</code>: Specifies the collection of OAuth 2.0 permission scopes that the web API (resource) app exposes to client apps. Correspond to <code>Scope</code> in <code>--api-permissions</code>.</li>\n</ul>\n\n<ul>\n<li><code>oauth2AllowImplicitFlow</code> - If the web app can request implicit flow access tokens (<code>oauth2AllowIdTokenImplicitFlow</code> for ID tokens). ⭐: SPAs, when using Implicit Grant Flow.</li>\n</ul>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Attribute Name</th>\n      <th>Brief Explanation</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>requiredResourceAccess</code></td>\n      <td>Specifies the resources that the app requires access to.</td>\n    </tr>\n    <tr>\n      <td><code>keyCredentials</code></td>\n      <td>Holds references to app-assigned credentials, string-based shared secrets and X.509 certificates.</td>\n    </tr>\n    <tr>\n      <td><code>acceptMappedClaims</code></td>\n      <td>Allows an application to use claims mapping without specifying a custom signing key.</td>\n    </tr>\n    <tr>\n      <td><code>optionalClaims</code></td>\n      <td>The optional claims returned in the token by the security token service for this specific app.</td>\n    </tr>\n    <tr>\n      <td><code>addIns</code></td>\n      <td>Defines custom behavior that a consuming service can use to call an app in specific contexts.</td>\n    </tr>\n    <tr>\n      <td><code>allowPublicClient</code></td>\n      <td>Specifies the fallback application type.</td>\n    </tr>\n    <tr>\n      <td><code>knownClientApplications</code></td>\n      <td>Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.</td>\n    </tr>\n    <tr>\n      <td><code>oauth2RequirePostResponse</code></td>\n      <td>Specifies whether, as part of OAuth 2.0 token requests, Entra ID will allow POST requests, as opposed to GET requests.</td>\n    </tr>\n    <tr>\n      <td><code>passwordCredentials</code></td>\n      <td>Similar to <code>keyCredentials</code>, holds references to app-assigned credentials, string-based shared secrets.</td>\n    </tr>\n    <tr>\n      <td><code>preAuthorizedApplications</code></td>\n      <td>Lists applications and requested permissions for implicit consent.</td>\n    </tr>\n    <tr>\n      <td><code>replyUrlsWithType</code></td>\n      <td>Holds the list of registered redirect_uri values that Entra ID will accept as destinations when returning tokens.</td>\n    </tr>\n    <tr>\n      <td><code>signInAudience</code></td>\n      <td>Specifies what Microsoft accounts are supported for the current application.</td>\n    </tr>\n    <tr>\n      <td><code>identifierUris</code></td>\n      <td>User-defined URI(s) that uniquely identify a web app within its Entra ID tenant or verified customer owned domain.</td>\n    </tr>\n    <tr>\n      <td><code>tags</code></td>\n      <td>Custom strings that can be used to categorize and identify the application.</td>\n    </tr>\n    <tr>\n      <td><code>parentalControlSettings</code></td>\n      <td>Specifies the countries/regions in which the app is blocked for minors and the legal age group rule that applies to users of the app.</td>\n    </tr>\n    <tr>\n      <td><code>accessTokenAcceptedVersion</code></td>\n      <td>Specifies the access token version expected by the resource.</td>\n    </tr>\n    <tr>\n      <td><code>logoutUrl</code></td>\n      <td>The URL to log out of the app.</td>\n    </tr>\n    <tr>\n      <td><code>signInUrl</code></td>\n      <td>Specifies the URL to the app's home page.</td>\n    </tr>\n    <tr>\n      <td><code>logoUrl</code></td>\n      <td>Read only value that points to the CDN URL to logo that was uploaded in the portal.</td>\n    </tr>\n    <tr>\n      <td><code>samlMetadataUrl</code></td>\n      <td>The URL to the SAML metadata for the app.</td>\n    </tr>\n    <tr>\n      <td><code>publisherDomain</code></td>\n      <td>The verified publisher domain for the application.</td>\n    </tr>\n    <tr>\n      <td><code>informationalUrls</code></td>\n      <td>Specifies the links to the app's terms of service and privacy statement.</td>\n    </tr>\n    <tr>\n      <td><code>appId</code></td>\n      <td>Specifies the unique identifier for the app that is assigned to an app by Entra ID.</td>\n    </tr>\n    <tr>\n      <td><code>name</code></td>\n      <td>The display name for the app.</td>\n    </tr>\n    <tr>\n      <td><code>id</code></td>\n      <td>The unique identifier for the app in the directory.</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 4
      },
      {
        "id": "section-13",
        "title": "ASP.NET Core Authorization: Working with Roles, Claims, and Policies",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/aspnet/core/security/authorization/policies?view=aspnetcore-3.1\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Policies</strong></a>: A policy is a function that can look at a user's identity and decide whether they are authorized to perform a given action.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles?view=aspnetcore-3.1\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Roles</strong></a>: A role represents a group of users that have certain privileges as defined by the role.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims?view=aspnetcore-3.1\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Claims</strong></a>: A claim is a name-value pair that represents what the subject is, not what the subject can do.</li>\n</ul>\n<p><pre><code class=\"language-cs\">// Startup.cs\npublic void ConfigureServices(IServiceCollection services)\n{\n    // Define policies\n    services.AddAuthorization(options =&gt;\n    {\n        options.AddPolicy(&quot;ClientsOnly&quot;, policy =&gt;\n        {\n            policy.RequireAuthenticatedUser(); // Requires the user to be authenticated\n            policy.RequireRoles(&quot;PrivateClient&quot;, &quot;CorporateClient&quot;); // Requires ANY of these listed roles\n            policy.RequireClaim(&quot;SubscriptionTier&quot;, &quot;free&quot;, &quot;basic&quot;, &quot;premium&quot;); // Requires ANY of the values for SubscriptionTier\n        });\n        options.AddPolicy(&quot;FreeloadersOnly&quot;, policy =&gt;\n        {\n            policy.RequireAuthenticatedUser();\n            policy.RequireRole(&quot;PrivateClient&quot;);\n            policy.RequireClaim(&quot;SubscriptionTier&quot;, &quot;free&quot;);\n        });\n        options.AddPolicy(&quot;EmployeeOnly&quot;, policy =&gt; policy.RequireClaim(&quot;EmployeeNumber&quot;)); // Requires EmployeeNumber claim\n        options.AddPolicy(&quot;AdminOnly&quot;, policy =&gt; policy.RequireRole(&quot;Administrator&quot;)); // Requires Administrator role\n    });\n}\n\n// LoginController.cs\n[HttpPost]\npublic async Task&lt;IActionResult&gt; Login(LoginViewModel model)\n{\n  // Checks omitted for brevity\n  var user = await _userManager.FindByNameAsync(model.Username);\n  var claim = new Claim(&quot;EmployeeNumber&quot;, &quot;123&quot;);\n  await _userManager.AddClaimAsync(user, claim);\n}\n\n[Authorize(Policy = &quot;ClientsOnly&quot;)] // Allow premium clients only\npublic class AdminController : Controller { }\n\n[Authorize(Role = &quot;CorporateClient&quot;)] // Allow corporate clients only\npublic class AdminController : Controller { }\n\n[Authorize(Policy = &quot;EmployeeOnly&quot;)] // Apply EmployeeOnly policy\npublic class WorkController : Controller { }\n\n[Authorize(Policy = &quot;AdminOnly&quot;)] // Apply AdminOnly policy\npublic class AdminController : Controller { }\n\n[Authorize(Policy = &quot;ClientsOnly&quot;)] // Clients only that also have &quot;Administrator&quot; role (AND)\n[Authorize(Roles = &quot;Administrator&quot;)]\npublic class ClientAdminController : Controller { }</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      }
    ],
    "relatedTopics": [
      "API Management",
      "App Service",
      "Azure Portal",
      "Graph"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/entra/identity/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "event-grid",
    "topic": "event-grid",
    "title": "Azure Event Grid",
    "description": "Azure Event Grid is a serverless broker that facilitates application integration through events. It simplifies event consumption and lowers costs by eliminating the need for constant polling. It ro...",
    "difficulty": "Beginner",
    "estimatedReadTime": 39,
    "tags": [
      "Event Grid",
      "Event Hub",
      "Blob Storage",
      "Service Bus",
      "Blob storage",
      "Event grid"
    ],
    "learningObjectives": [
      "Event Order: Event Grid does not guarantee the order of event delivery.",
      "Azure Service Bus topics and queues",
      "Azure Event Hubs"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Basic programming knowledge (C#, JavaScript, or Python)",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Azure Event Grid is a serverless broker that facilitates application integration through events. It simplifies event consumption and lowers costs by eliminating the need for constant polling. It routes events from sources such as applications and Azure services to subscribers, who select the events they want to handle.</p>\n\n<strong>Publishers</strong> send events without needing to know or expect specific subscribers. Event Grid supports both Azure and custom topics, simplifying the development of event-driven applications. It ensures reliable delivery by offering the ability to filter and route events to multiple endpoints. Subscriptions to events can include those from Azure services and third-party resources.\n\n<p>A _partner_ is a kind of publisher that sends events to Azure Event Grid for customers and can also receive events from it.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Concepts",
        "content": "<ul>\n<li><strong>Events</strong> - What happened. An event describes something that occurred, with common details like source, time, and unique identifier, and specific details relevant to the event type (example: in Azure Storage, a new file event includes details like <code>lastTimeModified</code> value, and in Event Hubs, it contains the Capture file URL). Events up to 64 KB are covered by the Service Level Agreement (SLA), and larger events are charged in increments.</li>\n<li><strong>Event sources</strong> - Where the event took place. Each source is related to one or more event types, such as Azure Storage for blob creation, IoT Hub for device created events. Event sources send events to Event Grid.</li>\n<li><strong>Topics</strong> - The endpoint where publishers send events. Topics are used for related events, and subscribers choose which to subscribe to. <strong>System topics</strong> are built-in and , while <strong>custom topics</strong> are application and third-party specific. You don't see system topics in your Azure subscription, but you can subscribe to them. <a href=\"https://learn.microsoft.com/en-us/azure/event-grid/partner-events-overview\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Partner topics</strong></a> let you subscribe to events from external systems, like SaaS apps, and use Azure services like Functions, Logic Apps, or custom code to handle them. You can create subscriptions like any other topic.</li>\n<li><strong>Event subscriptions</strong> - The endpoint or mechanism to route events, sometimes to multiple handlers. Subscriptions filter incoming events by type or subject pattern and can be set with an expiration for temporary needs (_no need of cleanup_).</li>\n<li><strong>Event handlers</strong> - Receives and processes events. Handlers can be Azure services or custom webhooks. Event Grid ensures event delivery based on handler type.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-3",
        "title": "Schemas",
        "content": "<p>The header values for CloudEvents and Event Grid schemas are identical except for the <code>content-type</code>. In CloudEvents, it's <code>\"content-type\":\"application/cloudevents+json; charset=utf-8\"</code>, while in Event Grid, it's <code>\"content-type\":\"application/json; charset=utf-8\"</code>.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Event Schemas",
        "content": "<p>Azure Event Grid receives events in an array from event sources. The array's total size can be up to 1 MB, with each event limited to 1 MB. If the event or array exceeds these limits, you'll get a <code>413 Payload Too Large</code> response. Charges are applied in 64 KB increments - a 130 KB event is charged as three separate events.</p>\n<p><pre><code class=\"language-ts\">type EventSchema = {\n  // Full resource path to the event source.\n  // If not included, Event Grid stamps onto the event.\n  // If included, it must match the Event Grid topic Azure Resource Manager ID exactly.\n  topic?: string;\n  // Publisher-defined path to the event subject.\n  subject: string;\n  // One of the registered event types for this event source.\n  eventType: string;\n  // The time the event is generated based on the provider&#39;s UTC time.\n  eventTime: string;\n  // Unique identifier for the event.\n  id: string;\n  // Event data specific to the resource provider.\n  data?: {\n    // Object unique to each publisher.\n    // Place your properties specific to the resource provider here.\n  };\n  // The schema version of the data object. The publisher defines the schema version.\n  // If not included, it is stamped with an empty value.\n  dataVersion?: string;\n  // The schema version of the event metadata. Event Grid defines the schema of the top-level properties.\n  // If not included, Event Grid will stamp onto the event.\n  // If included, must match the metadataVersion exactly (currently, only 1)\n  metadataVersion?: string;\n};</code></pre></p>\n<p>When creating subjects for publishing events to custom topics, it helps subscribers filter and route events based on where they happened. Include the path in the subject for better filtering.</p>\n\n<ul>\n<li>Example 1: With a path like <code>/A/B/C</code>, subscribers can filter by <code>/A</code> for a broad set, getting events like <code>/A/B/C</code> or <code>/A/D/E</code>. For a narrower set, they can filter by <code>/A/B</code>.</li>\n<li>Example 2: The <strong>Storage Accounts</strong> publisher provides <code>/blobServices/default/containers/<container-name>/blobs/<file></code> when adding a file. Subscribers can filter by <code>/blobServices/default/containers/testcontainer</code> for events from that container or use <code>.txt</code> to only work with text files.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-5",
        "title": "Cloud Event Schema",
        "content": "<p>CloudEvents offers a unified event schema for publishing and consuming cloud-based events (input and output in Event Grid). You can use CloudEvents for system events, like Blob Storage events and IoT Hub events, and custom events. It also supports bidirectional event transformation during transmission.</p>\n<p><pre><code class=\"language-ts\">interface CloudEvent {\n  // Identifies the event. Producers must ensure it&#39;s unique. Consumers can assume same source+id means duplicates.\n  id: string;\n\n  // Identifies the context in which an event happened.\n  // Syntax defined by the producer, preferably an absolute URI\n  source: string;\n\n  // The version of the CloudEvents specification used. Compliant producers MUST use value &quot;1.0&quot;.\n  specversion: string;\n\n  // Describes the type of event related to the originating occurrence.\n  // Should be prefixed with a reverse-DNS name.\n  type: string;\n\n  subject?: string; // Required in EventSchema, but optional here\n\n  // eventType is now &quot;type&quot;\n  // eventTime is now &quot;time&quot; and is optional\n\n  // ...\n}</code></pre></p>\n<p>Example of an Azure Blob Storage event in CloudEvents format:</p>\n<p><pre><code class=\"language-json\">{\n  &quot;specversion&quot;: &quot;1.0&quot;,\n  &quot;type&quot;: &quot;Microsoft.Storage.BlobCreated&quot;,\n  &quot;source&quot;: &quot;/subscriptions/{subscription-id}/resourceGroups/{resource-group}/providers/Microsoft.Storage/storageAccounts/{storage-account}&quot;,\n  &quot;id&quot;: &quot;9aeb0fdf-c01e-0131-0922-9eb54906e209&quot;,\n  &quot;time&quot;: &quot;2019-11-18T15:13:39.4589254Z&quot;,\n  &quot;subject&quot;: &quot;blobServices/default/containers/{storage-container}/blobs/{new-file}&quot;,\n  &quot;dataschema&quot;: &quot;#&quot;,\n  &quot;data&quot;: {\n    &quot;api&quot;: &quot;PutBlockList&quot;,\n    &quot;clientRequestId&quot;: &quot;4c5dd7fb-2c48-4a27-bb30-5361b5de920a&quot;,\n    &quot;requestId&quot;: &quot;9aeb0fdf-c01e-0131-0922-9eb549000000&quot;,\n    &quot;eTag&quot;: &quot;0x8D76C39E4407333&quot;,\n    &quot;contentType&quot;: &quot;image/png&quot;,\n    &quot;contentLength&quot;: 30699,\n    &quot;blobType&quot;: &quot;BlockBlob&quot;,\n    &quot;url&quot;: &quot;https://gridtesting.blob.core.windows.net/testcontainer/{new-file}&quot;,\n    &quot;sequencer&quot;: &quot;000000000000000000000000000099240000000000c41c18&quot;,\n    &quot;storageDiagnostics&quot;: {\n      &quot;batchId&quot;: &quot;681fe319-3006-00a8-0022-9e7cde000000&quot;\n    }\n  }\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-6",
        "title": "Event Delivery Durability",
        "content": "<ul>\n<li><strong>Delivery Attempts</strong>: Event Grid attempts to deliver each event at least once for each matching subscription immediately.</li>\n<li><strong>Single Event Payload</strong>: By default, one event is delivered at a time, and the payload is an array with a single event.</li>\n<li><strong>Event Order</strong>: Event Grid does not guarantee the order of event delivery.</li>\n</ul>\n\n<p>Event subscriptions support custom headers for delivered events. _Up to 10 headers_ can be set, with each value _limited to 4,096 bytes_. Can be applied to events sent to:</p>\n\n<ul>\n<li>Webhooks</li>\n<li>Azure Service Bus topics and queues</li>\n<li>Azure Event Hubs</li>\n<li>Relay Hybrid Connections.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Delivery and Retry",
        "content": "<h4>Retry schedule</h4>\n\n<p>Event Grid handles errors during event delivery by deciding based on the error type whether to retry, dead-letter (only if enabled), or drop the event. Timeout is 30 sec, then event is rescheduled for retry (exponentially). Retries may be skipped or delayed (up to several hours) for consistently unhealthy endpoints (<strong>delayed delivery</strong>). If the endpoint responds within 3 minutes, Event Grid tries to remove the event from the retry queue. Because of this, duplicates may occur.</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Endpoint Type</th>\n      <th>Success</th>\n      <th>Error Codes with no retries (immediate dead-lettering)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Azure Resources</td>\n      <td>200 OK</td>\n      <td>400 Bad Request, 413 Request Entity Too Large, 403 Forbidden</td>\n    </tr>\n    <tr>\n      <td>Webhook</td>\n      <td>Successful processing</td>\n      <td>400 Bad Request, 413 Request Entity Too Large, 403 Forbidden, 404 Not Found, 401 Unauthorized</td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>Retry policy</h4>\n\n<p>An event is dropped if either of the limits of the retry policy is reached.</p>\n\n<ul>\n<li><strong>Maximum number of attempts</strong> - 1 - 30 (default: 30)</li>\n<li><strong>Event time-to-live (TTL)</strong> - 1 - 1440 minutes. (default 1440)</li>\n</ul>\n<p><pre><code class=\"language-sh\">az eventgrid event-subscription create \\\n  -g $resourceGroup \\\n  --topic-name &lt;topic_name&gt; \\\n  --name &lt;event_subscription_name&gt; \\\n  --endpoint &lt;endpoint_URL&gt; \\\n  --max-delivery-attempts 18</code></pre></p>\n<h4>Dead-Letter Events</h4>\n\n<p>Occurs if the event isn't delivered within the retry policy limits. To enable, specify a storage account for undelivered events, and provide the endpoint for this container during event subscription creation. A five-minute delay exists between the last attempt and delivery to the dead-letter location, to reduce Blob storage operations.</p>\n\n<p>The time-to-live expiration is checked <strong>only</strong> at the next scheduled delivery attempt.</p>\n<p><pre><code class=\"language-sh\">az eventgrid event-subscription create \\\n  --source-resource-id $topicid \\\n  --name &lt;event_subscription_name&gt; \\\n  --endpoint &lt;endpoint_URL&gt; \\\n# To turn off dead-lettering, rerun this command, but don&#39;t provide a value for deadletter-endpoint\n  --deadletter-endpoint $storageid/blobServices/default/containers/$containername</code></pre></p>\n<h4>Output Batching</h4>\n\n<p>For better HTTP performance in handling a large number of events. _Off by default_. It doesn't support partial success of a batch delivery (_All or None_). The settings for batching are not strict and are respected on a best-effort basis, possibly resulting in smaller batches at low event rates (_Optimistic Batching_).</p>\n\n<p>Settings:</p>\n\n<ul>\n<li><strong>Max events per batch</strong>: 1 - 5,000 (default: 1?). If no other events are available at the time of publishing, fewer events may be delivered.</li>\n<li><strong>Preferred batch size in kilobytes</strong>: 1 - 1024 (default: 64KB?). Smaller if not enough events are available. If a single event is larger than the preferred size, it will be delivered as its own batch.</li>\n</ul>\n<p><pre><code class=\"language-sh\">az eventgrid event-subscription create \\\n  --resource-id $storageid \\\n  --name &lt;event_subscription_name&gt; \\\n  --endpoint $endpoint \\\n  --max-events-per-batch 1000 \\\n  --preferred-batch-size-in-kilobytes 512</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 3
      },
      {
        "id": "section-8",
        "title": "Built-in roles",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Role</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Event Grid Subscription Reader</td>\n      <td>Lets you read Event Grid event subscriptions.</td>\n    </tr>\n    <tr>\n      <td>Event Grid Subscription Contributor</td>\n      <td>Lets you manage Event Grid event subscription operations.</td>\n    </tr>\n    <tr>\n      <td>Event Grid Contributor</td>\n      <td>Lets you create and manage Event Grid resources.</td>\n    </tr>\n    <tr>\n      <td>Event Grid Data Sender</td>\n      <td>Lets you send events to Event Grid topics.</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Subscriptions roles don't grant access for actions such as creating topics.</p>\n\n<p>To subscribe to event handlers (except WebHooks), you need <strong>Microsoft.EventGrid/EventSubscriptions/Write</strong> permission to the corresponding resource (for system topics and custom topics).</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Topic Type</th>\n      <th>Permission to write a new event subscription at scope</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>System</td>\n      <td>Resource publishing the event</td>\n      <td><code>/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}</code></td>\n    </tr>\n    <tr>\n      <td>Custom</td>\n      <td>Event grid topic</td>\n      <td><code>/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/Microsoft.EventGrid/topics/{topic-name}</code></td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Webhooks",
        "content": "<p>When a new event is ready, Event Grid service POSTs an HTTP request to the configured endpoint with the event in the request body.</p>\n\n<p>Validation is automatically handled for:</p>\n\n<ul>\n<li>Azure Logic Apps with Event Grid Connector</li>\n<li>Azure Automation via webhook</li>\n<li>Azure Functions with Event Grid Trigger</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Endpoint validation with Event Grid events",
        "content": "<p>When using an endpoint like an HTTP-triggered Azure function with Event Grid, you'll need to validate the subscription through handshake:</p>\n\n<ol>\n<li>Webhook endpoint must return an HTTP 200 status code.</li>\n<li>One of the following properties must be available in the response</li>\n</ol>\n<ul>\n<li><code>validationCode</code> to complete <strong>Synchronous handshake</strong></li>\n<li><code>validationUrl</code> to transition to manual validation mode (<strong>Asynchronous handshake</strong>). Event subscription status changes to <code>AwaitingManualAction</code>. You must perform a GET request to this URL within 5 minutes, otherwise, status will change to <code>Failed</code>, and you must restart the process.</li>\n</ul>\n\n<p>Note: Self-signed certificates are not supported for validation; a signed certificate from a commercial CA is required.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Using ARM",
        "content": "<p><pre><code class=\"language-json\">{\n  &quot;filter&quot;: {\n    &quot;subjectBeginsWith&quot;: &quot;/blobServices/default/containers/mycontainer/log&quot;,\n    &quot;subjectEndsWith&quot;: &quot;.jpg&quot;\n  }\n}</code></pre></p>\n<p><pre><code class=\"language-json\">{\n  &quot;filter&quot;: {\n    &quot;includedEventTypes&quot;: [\n      &quot;Microsoft.Resources.ResourceWriteFailure&quot;,\n      &quot;Microsoft.Resources.ResourceWriteSuccess&quot;\n    ]\n  }\n}</code></pre></p>\n<h4>Advanced</h4>\n<p><pre><code class=\"language-jsonc\">{\n  &quot;filter&quot;: {\n    // enableAdvancedFilteringOnArrays: true // Allow array keys\n    &quot;advancedFilters&quot;: [\n      // AND operation\n      {\n        &quot;operatorType&quot;: &quot;NumberGreaterThanOrEquals&quot;,\n        &quot;key&quot;: &quot;Data.Key1&quot;, // The field in the event data that you&#39;re using for filtering (number, boolean, string)\n        &quot;value&quot;: 5\n      },\n      {\n        &quot;operatorType&quot;: &quot;StringContains&quot;,\n        &quot;key&quot;: &quot;Subject&quot;,\n        &quot;values&quot;: [&quot;container1&quot;, &quot;container2&quot;] // OR operation\n      }\n    ]\n  }\n}</code></pre></p>\n<p>Limitations:</p>\n\n<ul>\n<li>25 advanced filters and 25 filter values across all the filters per Event Grid subscription</li>\n<li>512 characters per string value</li>\n<li>No support for escape characters in keys</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Using CLI",
        "content": "<p><pre><code class=\"language-sh\">az eventgrid event-subscription create\n  --name &quot;&lt;Subscription_Name&gt;&quot;\n  --source-resource-id &quot;&lt;Event_Grid_Topic_Resource_Id&gt;&quot;\n  --endpoint &quot;&lt;Azure_Function_URL&gt;&quot;\n  --endpoint-type azurefunction\n  --subject-begins-with &quot;/A/B&quot;\n  --subject-ends-with &quot;.jpg&quot;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Route custom events to web endpoint",
        "content": "<p><pre><code class=\"language-sh\">mySiteURL=&quot;https://${mySiteName}.azurewebsites.net&quot;\n\n# Create a resource group\naz group create --name $resourceGroup --location $myLocation\n\n# Create a custom topic\naz eventgrid topic create --name $myTopicName \\\n    --location $myLocation \\\n    --resource-group $resourceGroup\n\n# Create a message endpoint\naz deployment group create \\\n    --resource-group $resourceGroup \\\n    --template-uri &quot;https://raw.githubusercontent.com/Azure-Samples/azure-event-grid-viewer/main/azuredeploy.json&quot; \\\n    --parameters siteName=$mySiteName hostingPlanName=viewerhost\n\n# Subscribe to a custom topic\nendpoint=&quot;${mySiteURL}/api/updates&quot;\nsubId=$(az account show --subscription &quot;&quot; | jq -r &#39;.id&#39;)\naz eventgrid event-subscription create \\\n    --source-resource-id &quot;/subscriptions/$subId/resourceGroups/$resourceGroup/providers/Microsoft.EventGrid/topics/$myTopicName&quot; \\\n    --name az204ViewerSub \\\n    --endpoint $endpoint\n\n# Send an event to the custom topic\ntopicEndpoint=$(az eventgrid topic show --name $myTopicName -g $resourceGroup --query &quot;endpoint&quot; --output tsv)\nkey=$(az eventgrid topic key list --name $myTopicName -g $resourceGroup --query &quot;key1&quot; --output tsv)\nevent=&#39;[ {&quot;id&quot;: &quot;&#39;&quot;$RANDOM&quot;&#39;&quot;, &quot;eventType&quot;: &quot;recordInserted&quot;, &quot;subject&quot;: &quot;myapp/vehicles/motorcycles&quot;, &quot;eventTime&quot;: &quot;&#39;`date +%Y-%m-%dT%H:%M:%S%z`&#39;&quot;, &quot;data&quot;:{ &quot;make&quot;: &quot;Contoso&quot;, &quot;model&quot;: &quot;Monster&quot;},&quot;dataVersion&quot;: &quot;1.0&quot;} ]&#39;\ncurl -X POST -H &quot;aeg-sas-key: $key&quot; -d &quot;$event&quot; $topicEndpoint</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Configure Azure Event Grid service to send events to an Azure Event Hub instance",
        "content": "<p><pre><code class=\"language-sh\">az eventgrid topic create --name $topicName --location $location --resource-group $resourceGroup\n\n# az eventgrid topic show --name $topicName --resource-group $resourceGroup --query &quot;{endpoint:endpoint, primaryKey:primaryKey}&quot; --output json\n\n# Create a namespace\naz eventhubs namespace create --name $namespaceName --location $location --resource-group $resourceGroup\n\n# Create an event hub\naz eventhubs eventhub create --name $eventHubName --namespace-name $namespaceName --resource-group $resourceGroup\n\ntopicId=$(az eventgrid topic show --name $topicName --resource-group $resourceGroup --query &quot;id&quot; --output tsv)\nhubId=$(az eventhubs eventhub show --name $eventHubName --namespace-name $namespaceName --resource-group $resourceGroup --query &quot;id&quot; --output tsv)\n\n# Link the Event Grid Topic to the Event Hub\naz eventgrid event-subscription create \\\n  --name &quot;&lt;Event_Subscription_Name&gt;&quot; \\\n  --source-resource-id $topicId \\\n  --endpoint-type eventhub \\\n  --endpoint $hubId</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Working with EventGrid",
        "content": "<a href=\"./AZ%20CLI.md\" target=\"_blank\" rel=\"noopener noreferrer\">Register <code>Microsoft.EventGrid</code> provider</a>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "Publish new events",
        "content": "<p>Create an Event Grid subscription: <code>Azure portal > Resource groups > PubSubEvents > eventviewer[yourname] web app > + Event Subscription</code></p>\n<p><pre><code class=\"language-cs\">Uri endpoint = new Uri(topicEndpoint);\n\n// topicKey is the key for your Event Grid topic, which you can find in the Azure Portal\nvar credential = new AzureKeyCredential(topicKey);\n\nvar client = new EventGridPublisherClient(endpoint, credential);\n\nvar newEmployeeEvent = new EventGridEvent(\n  subject: __CODEBLOCK_0__quot;New Employee: Alba Sutton&quot;,\n  eventType: &quot;Employees.Registration.New&quot;,\n  dataVersion: &quot;1.0&quot;,\n  data: new\n  {\n    FullName = &quot;Alba Sutton&quot;,\n    Address = &quot;4567 Pine Avenue, Edison, WA 97202&quot;\n  }\n);\n\n// Alt: CloudEvent is a standardized specification designed to provide interoperability across services, platforms, and systems.\n// It can be used across different cloud providers and platforms, unlike EventGridEvent, which is specific to Azure.\n// var newEmployeeEvent = new CloudEvent(&quot;Employees.Registration.New&quot;, new Uri(&quot;/mycontext&quot;))\n// {\n//     Subject = __CODEBLOCK_0__quot;New Employee: Alba Sutton&quot;,\n//     DataContentType = new ContentType(&quot;application/json&quot;),\n//     Data = JsonConvert.SerializeObject(new\n//     {\n//         FullName = &quot;Alba Sutton&quot;,\n//         Address = &quot;4567 Pine Avenue, Edison, WA 97202&quot;\n//     })\n// };\n\nawait client.SendEventAsync(newEmployeeEvent);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Azure Portal",
      "Blob Storage",
      "Containers",
      "Event Hub"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/event-grid/partner-events-overview",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "event-hub",
    "topic": "event-hub",
    "title": "Azure Event Hub",
    "description": "- Fully Managed PaaS, integrating with Apache Kafka. - Real-Time and Batch Processing: Uses partitioned consumer model to process streams concurrently and control processing speed.",
    "difficulty": "Advanced",
    "estimatedReadTime": 14,
    "tags": [
      "Event Hub",
      "Blob storage",
      "event hub",
      "Event Grid",
      "Blob Storage",
      "blob storage"
    ],
    "learningObjectives": [
      "Fully Managed PaaS, integrating with Apache Kafka.",
      "Capture Event Data: Stores data in near-real-time in Azure Blob storage or Azure Data Lake Storage.",
      "Event Hubs/Kafka topic: An append-only log for organizing events, consisting of one or more partitions."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<ul>\n<li><strong>Fully Managed PaaS</strong>, integrating with Apache Kafka.</li>\n<li><strong>Real-Time and Batch Processing</strong>: Uses partitioned consumer model to process streams concurrently and control processing speed.</li>\n<li><strong>Capture Event Data</strong>: Stores data in near-real-time in Azure Blob storage or Azure Data Lake Storage.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Key Concepts",
        "content": "<ul>\n<li><strong>Producer applications</strong>: Source of various types of data such as telemetry, diagnostics, logs, etc. Send data to an event hub via SDKs or Kafka producer clients.</li>\n<li><strong>Namespace</strong>: A container managing event hubs or Kafka topics, handling tasks like capacity, security, and disaster recovery.</li>\n<li><strong>Event Hubs/Kafka topic</strong>: An append-only log for organizing events, consisting of one or more partitions.</li>\n<li><strong>Partitions</strong>: Ordered sequence of events in an Event Hub, used for parallelism in data processing (increasing throughput).</li>\n<li><strong>Consumer applications</strong>: Reads information from Event Hubs for processing, distribution, or storage. Uses SDKs or Kafka.</li>\n<li><strong>Consumer group</strong>: A logical group allowing multiple consumers to read the same data independently.</li>\n</ul>\n\n<p>!<a href=\"https://learn.microsoft.com/en-us/training/wwl-azure/azure-event-hubs/media/event-hubs-stream-processing.png\" target=\"_blank\" rel=\"noopener noreferrer\">Image showing the event processing flow.</a></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "AMQP vs. HTTPS",
        "content": "<ul>\n<li><strong>Initialization</strong>: AMQP requires a persistent bidirectional socket plus TLS or SSL/TLS, resulting in _higher initial network costs_. HTTPS has extra TLS overhead for each request.</li>\n<li><strong>Performance</strong>: AMQP offers _higher throughput and lower latency_ for frequent publishers. HTTPS can be slower due to the extra overhead.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Namespace",
        "content": "<p>An Event Hubs namespace is a management container for event hubs. It provides DNS-integrated network endpoints and a range of access control and network integration management features such as IP filtering, virtual network service endpoint, and Private Link.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Event Retention",
        "content": "<p>Published events are removed from an event hub based on a configurable, time-based retention policy. The default value and shortest possible retention period is 1 hour.</p>\n\n<p>Max retention perios:</p>\n\n<ul>\n<li>Standard: 7 days</li>\n<li>Premium and Dedicated: 90 days.</li>\n</ul>\n\n<p>If you need to archive events beyond the allowed retention period, you can have them automatically stored in Azure Storage or Azure Data Lake by turning on the Event Hubs Capture feature.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Event Hubs Capture",
        "content": "<p>Allows automatic capturing of streaming data into <strong>Azure Blob storage</strong> or <strong>Azure Data Lake Storage</strong>. It can process real-time and batch-based pipelines on the same stream. You can specify the time or size interval for capturing, and it scales automatically with throughput units.</p>\n\n<p>It is a durable buffer for telemetry ingress (similar to a distributed log) with a partitioned consumer model. Captured data is written in Apache Avro format.</p>\n\n<p>Storeage accounts can be in the same region as your event hub or in another region.</p>\n\n<p>Capture allows you to set up a minimum size and time window for capturing data (_capture windowing_). The \"first wins policy\" means the first trigger encountered initiates the capture operation. Each partition captures data independently and creates a block blob when the capture interval is reached, named after that time.</p>\n\n<p>Example:</p>\n<p><pre><code class=\"language-txt\">https://mystorageaccount.blob.core.windows.net/mycontainer/mynamespace/myeventhub/0/2017/12/08/03/03/17.avro\n{Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}</code></pre></p>\n<p>Integration with Event Grid: Create an Event Grid subscription with an Event Hubs namespace as its source.</p>\n\n<p>Azure Storage account as a destination: Needs write permissions on blobs and containers level. The <code>Storage Blob Data Owner</code> is a built-in role with above permissions.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Log Compaction",
        "content": "<p>Azure Event Hubs supports compacting event log to retain the latest events of a given event key. With compacted event hubs/Kafka topic, you can use key-based retention rather than using the coarser-grained time-based retention.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Scaling to throughput units",
        "content": "<p>Traffic is managed by throughput units. One unit permits 1 MB or 1000 events per second incoming (ingress), and twice that outgoing (egress). Standard hubs support 1-20 units (you can buy more). Exceeding your units limit will be throttled. Event Hubs Capture directly copies data and bypasses outgoing limits.</p>\n\n<p>To scale your event processing app, run multiple instances using <strong>EventProcessorClient</strong> and let them balance the load. Event processor instances usually handle data from several partitions (_distributed ownership_). They claim ownership of partitions through entries in a checkpoint store. All processors update this store to manage their state and balance the workload.</p>\n\n<p>Designing large systems:</p>\n\n<ul>\n<li><strong>Scale</strong>: Have several readers, each handling some of the event hub partitions.</li>\n<li><strong>Load Balance</strong>: Adjust the number of readers as needed. If a new type of sensor is added, the operator can increase readers to handle more data.</li>\n<li><strong>Resume After Failures</strong>: If a reader fails, others take over from where it left off.</li>\n<li><strong>Consume Events</strong>: There must be code to process the data, like combining it and saving it for the webpage.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Event Processor",
        "content": "<ul>\n<li><strong>Receiving Messages</strong>: Create an event processor to handle specific partition events. Include retry logic to process every message at least once, and use two consumer groups for storage and routing needs.</li>\n<li><strong>Checkpointing</strong>: The event processor marks the last processed event within a partition, allowing for resiliency. If an event processor disconnects, another can resume at the last checkpoint, and it's possible to return to older data by specifying a lower offset.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Partitions",
        "content": "<p>They serve as \"commit logs\" for organizing sequences of events, with <strong>new events added in the order they were received</strong>. 4 by default. They enhance raw IO throughput by allowing multiple parallel logs and streamline processing by assigning clear ownership, thus efficiently handling large volumes of events. The number of partitions, set within an allowed tier range at creation, influences throughput but not cost, and cannot be changed later. While increasing partitions can boost throughput, it may complicate processing. Balancing scaling units and partitions, with a guideline of 1 MB/s per partition, is recommended for optimal scale. The key directs events to specific partition, allowing related events to be grouped together by attributes like unique identity or geography.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Control access to events",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#azure-event-hubs-data-owner\" target=\"_blank\" rel=\"noopener noreferrer\">Azure Event Hubs Data Owner</a>: _complete access_ to Event Hubs resources.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#azure-event-hubs-data-sender\" target=\"_blank\" rel=\"noopener noreferrer\">Azure Event Hubs Data Sender</a>: _send access_ to Event Hubs resources.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#azure-event-hubs-data-receiver\" target=\"_blank\" rel=\"noopener noreferrer\">Azure Event Hubs Data Receiver</a>: _receiving access_ to Event Hubs resources.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Working with Event Hubs",
        "content": "<p><pre><code class=\"language-cs\">// Connection strings and Event Hub name\nvar eventHubsConnectionString = &quot;Endpoint=sb://example-namespace.servicebus.windows.net/;SharedAccessKeyName=KeyName;SharedAccessKey=AccessKey&quot;;\nvar eventHubName = &quot;example-event-hub&quot;;\nvar storageConnectionString = &quot;DefaultEndpointsProtocol=https;AccountName=exampleaccount;AccountKey=examplekey;EndpointSuffix=core.windows.net&quot;;\nvar blobContainerName = &quot;example-container&quot;;\nvar consumerGroup = EventHubConsumerClient.DefaultConsumerGroupName;\n\n// Alt to connection string: ClientSecretCredential, DefaultAzureCredential with fullyQualifiedNamespace\n\n// Application Groups: You can connect via SAS or Entra ID (just pass credential to EventHubProducerClient), allowing you to use access policies, throttling, etc.\nawait using (var producerClient = new EventHubProducerClient(eventHubsConnectionString, eventHubName))\n{\n    string[] partitionIds = await producerClient.GetPartitionIdsAsync(); // Query partition IDs\n\n    // Publish events to Event Hubs\n\n    // Create a batch of events\n    using EventDataBatch eventBatch = await producerClient.CreateBatchAsync();\n    // Add events to the batch. An event is represented by a collection of bytes and metadata.\n    eventBatch.TryAdd(new EventData(Encoding.UTF8.GetBytes(&quot;First event&quot;)));\n    eventBatch.TryAdd(new EventData(Encoding.UTF8.GetBytes(&quot;Second event&quot;)));\n    // Use the producer client to send the batch of events to the event hub\n    await producerClient.SendAsync(eventBatch);\n}\n\n// Using buffer\n// EventHubBufferedProducerClient abstracts away the complexities of batching and sending events, making it easier to use but with less control.\nusing(var bufferedProducerClient = new EventHubBufferedProducerClient(connectionString, eventHubName))\n{\n    await bufferedProducerClient.EnqueueEventAsync(new EventData(Encoding.UTF8.GetBytes(&quot;First event&quot;)));\n    await bufferedProducerClient.EnqueueEventAsync(new EventData(Encoding.UTF8.GetBytes(&quot;Second event&quot;)));\n}\n\n// Read events from Event Hubs\nawait using (var consumer = new EventHubConsumerClient(consumerGroup, eventHubsConnectionString, eventHubName))\n{\n    using var cancellationSource = new CancellationTokenSource(TimeSpan.FromSeconds(45));\n    await foreach (PartitionEvent receivedEvent in consumer.ReadEventsAsync(cancellationSource.Token)) {} // Wait for events\n}\n\n// Read events from an Event Hubs partition\n// The events will be returned in the order they were added to that partition\nawait using (var consumer = new EventHubConsumerClient(consumerGroup, eventHubsConnectionString, eventHubName))\n{\n    EventPosition startingPosition = EventPosition.Earliest;\n    string partitionId = (await consumer.GetPartitionIdsAsync()).First();\n\n    using var cancellationSource = new CancellationTokenSource(TimeSpan.FromSeconds(45));\n    await foreach (PartitionEvent receivedEvent in consumer.ReadEventsFromPartitionAsync(partitionId, startingPosition, cancellationSource.Token)) // Wait for events in partition\n    {\n        string readFromPartition = partitionEvent.Partition.PartitionId;\n        byte[] eventBody = partitionEvent.Data.EventBody.ToArray();\n    }\n}\n\n// Process events using Event Processor client\n// NOTE: You need Blob Storage for checkpointing\nvar storageClient = new BlobContainerClient(storageConnectionString, blobContainerName);\nvar processor = new EventProcessorClient(storageClient, consumerGroup, eventHubsConnectionString, eventHubName);\nTask processEventHandler(ProcessEventArgs eventArgs) =&gt; {\n    // Checkpointing: Update checkpoint in the blob storage so that you can resume from this point if the processor restarts\n    await eventArgs.UpdateCheckpointAsync();\n};\nTask processErrorHandler(ProcessErrorEventArgs eventArgs) =&gt; Task.CompletedTask;\n\nprocessor.ProcessEventAsync += processEventHandler;\nprocessor.ProcessErrorAsync += processErrorHandler;\n\nawait processor.StartProcessingAsync();\ntry { await Task.Delay(Timeout.Infinite, new CancellationTokenSource(TimeSpan.FromSeconds(45)).Token); } catch (TaskCanceledException) {}\ntry { await processor.StopProcessingAsync(); } finally\n{\n    processor.ProcessEventAsync -= processEventHandler;\n    processor.ProcessErrorAsync -= processErrorHandler;\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-13",
        "title": "CLI",
        "content": "<p><pre><code class=\"language-sh\"># Create a resource group\naz group create --name $resourceGroup --location eastus\n\n# Create an Event Hubs namespace\n# Throughput units are specified here\naz eventhubs namespace create --name $eventHubNamespace --sku Standard --location eastus --resource-group $resourceGroup\n\n# Get the connection string for a namespace\naz eventhubs namespace authorization-rule keys list --namespace-name $eventHubNamespace --name RootManageSharedAccessKey --resource-group $resourceGroup\n\n# Create an Event Hub inside the namespace\n# Partition count and retention days are specified here\naz eventhubs eventhub create --name $eventHub --namespace-name $eventHubNamespace --partition-count 2 --message-retention 1 --resource-group $resourceGroup\n\n# Get the connection string for a specific event hub within a namespace\naz eventhubs eventhub authorization-rule keys list --namespace-name $eventHubNamespace --eventhub-name $eventHubName --name MyAuthRuleName --resource-group $resourceGroup\n\n# Create a Consumer Group (Consumer Groups)\naz eventhubs eventhub consumer-group create --eventhub-name $eventHub --name MyConsumerGroup --namespace-name $eventHubNamespace --resource-group $resourceGroup\n\n# Capture Event Data (Event Hubs Capture)\n# Enable capture and specify the storage account and container\naz eventhubs eventhub update --name $eventHub --namespace-name $eventHubNamespace --enable-capture True --storage-account sasurl --blob-container containerName --resource-group $resourceGroup\n\n# Scale the throughput units (Throughput Units)\naz eventhubs namespace update --name $eventHubNamespace --sku Standard --capacity 2 --resource-group $resourceGroup\n\n# Get Event Hub details (Partitions, Consumer Groups)\naz eventhubs eventhub show --name $eventHub --namespace-name $eventHubNamespace --resource-group $resourceGroup\n\n# Delete the Event Hub Namespace (this will delete the Event Hub and Consumer Groups within it)\naz eventhubs namespace delete --name $eventHubNamespace --resource-group $resourceGroup</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      }
    ],
    "relatedTopics": [
      "Blob Storage",
      "Containers",
      "Entra ID",
      "Event Grid"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/training/wwl-azure/azure-event-hubs/media/event-hubs-stream-processing.png",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "events",
    "topic": "events",
    "title": "Events",
    "description": "Comprehensive guide to Events in Microsoft Azure platform",
    "difficulty": "Intermediate",
    "estimatedReadTime": 3,
    "tags": [
      "Events",
      "Event Hub",
      "Event Grid"
    ],
    "learningObjectives": [
      "Understand general comparison"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "General Comparison",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Azure Event Hubs</th>\n      <th>Azure Event Grid</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><strong>Data</strong></td>\n      <td>Handles high-volume data</td>\n      <td>Focuses on event, not payload</td>\n    </tr>\n    <tr>\n      <td><strong>Integration</strong></td>\n      <td>Works with Azure Stream Analytics</td>\n      <td>Built-in Azure service integration</td>\n    </tr>\n    <tr>\n      <td><strong>Pricing</strong></td>\n      <td>Charges by data ingested</td>\n      <td>Charges per operation, 🏷️ for low payload</td>\n    </tr>\n    <tr>\n      <td><strong>Scalability</strong></td>\n      <td>Millions of events/sec, ideal for big data</td>\n      <td>Auto-scales, limited max throughput</td>\n    </tr>\n    <tr>\n      <td><strong>Use Case</strong></td>\n      <td>Real-time analytics, large data volumes</td>\n      <td>Real-time event processing</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Event Grid",
      "Event Hub"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "azure-functions",
    "topic": "azure-functions",
    "title": "Azure Functions",
    "description": "Comprehensive guide to Azure Functions in Microsoft Azure platform",
    "difficulty": "Beginner",
    "estimatedReadTime": 44,
    "tags": [
      "Functions",
      "Azure Functions",
      "Application Insights",
      "App Service",
      "Queue storage",
      "Event Grid"
    ],
    "learningObjectives": [
      "Storage accounts used by function apps must support Blob, Queue, and Table storage.",
      "The storage account should be in the same region as the function app for performance optimization.",
      "Each function app should use a separate storage account for best performance.",
      "`local.settings.json` - set `FUNCTIONS_WORKER_RUNTIME` to \"custom\" for local development"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Basic programming knowledge (C#, JavaScript, or Python)",
      "Experience with REST APIs and HTTP protocols"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Introduction",
        "content": "<p>Azure Functions, a serverless compute service, allows you to execute small code snippets in response to events or on a schedule, eliminating the need to manage servers. It triggers your code based on specific events and simplifies data handling. Typical use cases include processing file uploads, handling real-time data streams, performing machine learning tasks, running scheduled tasks, building scalable web APIs, orchestrating serverless workflows, responding to database changes, and establishing reliable message systems.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Azure Functions vs Azure Logic Apps vs WebJobs",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Azure Functions</th>\n      <th>Azure Logic Apps</th>\n      <th>Azure WebJobs</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Development</td>\n      <td>Code-first approach</td>\n      <td>Designer-first approach</td>\n      <td>Code-first approach</td>\n    </tr>\n    <tr>\n      <td>Monitoring</td>\n      <td>Azure Application Insights</td>\n      <td>Azure portal and Azure Monitor logs</td>\n      <td>Application Insights</td>\n    </tr>\n    <tr>\n      <td>Execution</td>\n      <td>Can run in Azure or locally</td>\n      <td>Can run in Azure, locally, or on premises</td>\n      <td>Runs in the context of an App Service web app</td>\n    </tr>\n    <tr>\n      <td>Pricing</td>\n      <td>Pay-per-use</td>\n      <td>Based on execution and connector usage</td>\n      <td>Part of the App Service plan</td>\n    </tr>\n    <tr>\n      <td>Unique Strengths</td>\n      <td>Flexibility and cost-effectiveness, many supported languages, built on the WebJobs SDK</td>\n      <td>Extensive integration capabilities with a large collection of connectors</td>\n      <td>Ideal for tasks related to an existing App Service app and need more control over the code that listens for events</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Hosting Options",
        "content": "<p>Consumption is the lowest plan that supports scaling and offer event based scheduling behavior.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Azure Functions Hosting Plans Comparison",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Plan</th>\n      <th>Cost Model</th>\n      <th>Cold Start</th>\n      <th>Scale</th>\n      <th>Best For</th>\n      <th>Limitations</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/consumption-plan\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Consumption</strong></a></td>\n      <td>Serverless (Pay per use)</td>\n      <td>When idle or scaled down to zero instances</td>\n      <td>Event-driven</td>\n      <td>- Low-traffic, cost-sensitive workloads<br/>- Variable or unpredictable workloads</td>\n      <td>- No container support<br/>- 5–10 min timeout<br/>- Max instances: 100 (Linux), 200 (Windows)<br/>- No VNET integration<br/>- No support for durable functions chaining large executions</td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/flex-consumption-plan\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Flex Consumption</strong></a></td>\n      <td>Serverless (Pay per use) + memory for always-ready instances</td>\n      <td>Mitigates cold starts during scaling via always-ready instances</td>\n      <td>Per-function</td>\n      <td>- Low-latency apps needing faster startup</td>\n      <td>- No containers or Windows support<br/>- Regional availability limited</td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Premium</strong></a></td>\n      <td>Predictable: runtime + memory for pre-warmed instances</td>\n      <td>No cold starts (minimum instance count always warm)</td>\n      <td>Event-driven</td>\n      <td>- Production-grade apps<br/>- Long-running tasks<br/>- Custom images</td>\n      <td>- Must keep at least one instance warm<br/>- Higher cost</td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/dedicated-plan\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Dedicated</strong></a></td>\n      <td>Predicatble (Fixed) - App Service Plan pricing</td>\n      <td>Avoided for the always-on instance, but may occur during scale-out (no pre-warmed instances).</td>\n      <td>Manual or App Service autoscale (rule-based)</td>\n      <td>- App Service integration (reuse VMs)<br/>- Run multiple apps on one plan<br/>- Access to larger compute sizes<br/>- Full isolation (VNET) & secure networking (ASE)</td>\n      <td>- Not cost-effective unless fully utilized<br/>- Manual scaling unless using App Service autoscale</td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/functions-container-apps-hosting\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Container Apps</strong></a></td>\n      <td>Azure Container Apps plan (consumption / dedicated)</td>\n      <td>Depends on <code>minReplicas</code>: 1+ avoids cold start</td>\n      <td>Event-driven (KEDA based)</td>\n      <td>- Custom runtimes/libraries<br/>- Legacy/on-prem to containers<br/>- No Kubernetes management<br/>- GPU-powered functions</td>\n      <td>- Cold start unless minReplica ≥ 1<br/>- Complexer setup</td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>Scaling</h4>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling\" target=\"_blank\" rel=\"noopener noreferrer\">Event driven</a>: The _scale controller_ adjusts resources based on event rates and trigger types. It uses heuristics for each trigger type (for Queue storage trigger, it scales based on the queue length and the age of the oldest queue message).</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/flex-consumption-plan#per-function-scaling\" target=\"_blank\" rel=\"noopener noreferrer\">Per function</a>: Most functions scale independently, while HTTP, Blob (Event Grid), and Durable Function triggers each scale as grouped sets on shared instances.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-get-started\" target=\"_blank\" rel=\"noopener noreferrer\">Rule based (autoscale)</a>: Unlike event-driven scaling, it doesn't directly respond to function invocations, but to the resource metrics (CPU, memory, HTTP queue length) or schedules.</li>\n</ul>\n\n<h4>CLI</h4>\n<p><pre><code class=\"language-sh\">az functionapp plan create\n    --name\n    --resource-group\n    --sku # F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large), K1 (Kubernetes)\n    [--is-linux {false, true}]\n    [--location]\n    [--max-burst]\n    [--min-instances]\n    [--tags]\n    [--zone-redundant] # Cannot be changed after plan creation. Minimum instance count is 3.\n# az functionapp plan create -g $resourceGroup -n MyPlan --min-instances 1 --max-burst 10 --sku EP1\n\n# Get a list of all Consumption plans in your resource group\naz functionapp plan list --resource-group $resourceGroup --query &quot;[?sku.family==&#39;Y&#39;].{PlanName:name,Sites:numberOfSites}&quot; -o table\n\n# Get your hosting plan type\nappServicePlanId=$(az functionapp show --name $functionApp --resource-group $resourceGroup --query appServicePlanId --output tsv)\naz appservice plan list --query &quot;[?id==&#39;$appServicePlanId&#39;].sku.tier&quot; --output tsv\n\n# Get a list of all Premium plans in your resource group\naz functionapp plan list --resource-group $resourceGroup --query &quot;[?sku.family==&#39;EP&#39;].{PlanName:name,Sites:numberOfSites}&quot; -o table</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 3
      },
      {
        "id": "section-5",
        "title": "Storage Considerations",
        "content": "<ul>\n<li>Function code and configuration files are stored in Azure Files in the linked storage account. Deleting this account will result in the loss of these files.</li>\n<li>Azure Functions requires an Azure Storage account for services like Azure Blob Storage, Azure Files, Azure Queue Storage, and Azure Table Storage.</li>\n<li>Storage accounts used by function apps must support Blob, Queue, and Table storage.</li>\n<li>The storage account should be in the same region as the function app for performance optimization.</li>\n<li>Each function app should use a separate storage account for best performance.</li>\n<li>Azure Storage encrypts all data in a storage account at rest.</li>\n<li>Functions use a host ID value to uniquely identify a function app in stored artifacts. Host ID collisions can occur and should be avoided.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Configuration",
        "content": "<p>The following languages can be used directly in Azure Portal (no external editor needed): <code>C# Script</code>, <code>JavaScript</code>, <code>Python</code>, <code>PowerShell</code>.</p>\n\n<ul>\n<li><strong>Application Settings</strong>: Cloud-based env vars. Securely store secrets (e.g. connection strings). Set via Portal/CLI/ARM. Accessed via <code>%VAR%</code> or <code>Environment.GetEnvironmentVariable()</code>.</li>\n<li><strong>function.json</strong>: Per-function bindings config (script languages only). Declares triggers, inputs, outputs. References <strong>Application Settings</strong> by name.</li>\n<li><strong>host.json</strong>: App-wide runtime config. Controls logging, timeouts, retries, and extension settings.</li>\n<li><strong>local.settings.json</strong>: Local dev only. <code>\"Values\"</code> mimic <strong>Application Settings</strong>. Never deploy or commit (can contain secrets).</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "host.json",
        "content": "<ul>\n<li><code>functionTimeout</code>: Default: 5 min for Consumption, 30 for rest.</li>\n<li><code>logging.applicationInsights</code></li>\n<li><code>aggregator</code> - Specifies how many function invocations are aggregated when calculating metrics for Application Insights.</li>\n<li><code>extensions.http.dynamicThrottlesEnabled</code>: Enabled by default for Consumption only. Throttles on high resource usage.</li>\n<li><code>extensions.blobsmaxDegreeOfParallelism</code>: concurrent invocations allowed for all blob-triggered functions (min: 1, default: 8)</li>\n<li><code>extensions.cosmosDB.connectionMode</code>: _Gateway_ (default) or _Direct_. _Gateway_ is preferable for _Consumption_ plan due to connections limit. _Direct_ has better performance.</li>\n<li><code>extensions.cosmosDB.userAgentSuffix</code>: Appends the given string to all service requests from the trigger or binding, enhancing tracking in Azure Monitor by function app and User Agent filtering.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "function.json",
        "content": "<p>Auto generated for compiled languages.</p>\n<p>For scripting languages, like <code>C# Script</code>, <code>Python</code>, you must provide the config file yourself.</p>\n\n<ul>\n<li>For triggers, the direction is always <code>in</code></li>\n<li>Input and output bindings use <code>in</code> and <code>out</code>, or <code>inout</code> in some cases.</li>\n<li><code>connection</code>: refers to an environment variable holding the connection string. <strong>It never contains the actual secret</strong>. Define the connection string in <code>Application Settings</code>.</li>\n</ul>\n<p><pre><code class=\"language-jsonc\">{\n  &quot;bindings&quot;: [\n    {\n      &quot;type&quot;: &quot;queueTrigger&quot;,\n      &quot;direction&quot;: &quot;in&quot;,\n      &quot;name&quot;: &quot;order&quot;,\n      &quot;queueName&quot;: &quot;myqueue-items&quot;,\n      &quot;connection&quot;: &quot;MY_STORAGE_ACCT_APP_SETTING&quot;\n    },\n    {\n      &quot;type&quot;: &quot;table&quot;,\n      &quot;direction&quot;: &quot;out&quot;,\n      &quot;name&quot;: &quot;$return&quot;,\n      &quot;tableName&quot;: &quot;outTable&quot;,\n      &quot;connection&quot;: &quot;MY_TABLE_STORAGE_ACCT_APP_SETTING&quot;\n    }\n  ]\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Configuration via CLI",
        "content": "<p>Setting properties: <code>az resource update --resource-type Microsoft.Web/sites -g $resourceGroup -n <FUNCTION_APP-NAME>/config/web --set properties.XXX</code>, where <code>XXX</code> is the name of the property.</p>\n\n<ul>\n<li><code>functionAppScaleLimit</code>: 0 or null for unrestricted, or a valid value between 1 and the app maximum (200 for Consumption, 100 for premium).</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "local.settings.json (code and test locally)",
        "content": "<p><pre><code class=\"language-ts\">type LocalSettings = {\n  // When true, all values are encrypted with a local machine key.\n  IsEncrypted: boolean; // false\n\n  // Correspond to application settings in your function app in Azure.\n  Values: {\n    [key: string]: string;\n  };\n\n  // Customize the Functions host process\n  Host: {\n    LocalHttpPort: number;\n\n    CORS: string; // supports wildcard value (*)\n\n    // When set to true, allows withCredentials requests\n    CORSCredentials: boolean;\n  };\n\n  // Used by frameworks that get connection strings from the ConnectionStrings section of a config file\n  ConnectionStrings: {\n    [key: string]: string;\n  };\n};</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Triggers and Bindings",
        "content": "<p>Triggers cause a function to run. A trigger defines how a function is invoked and a function must have exactly one trigger. Binding to a function is a way of declaratively connecting another resource to the function; bindings may be connected as _input bindings_ (read), _output bindings_ (write), or both.</p>\n\n<p>Triggers and bindings must be defined in C# (also supported: Python, Java, TypeScript, PS)</p>\n\n<p>Cannot be trigger: _Table Storage_</p>\n<p>Cannot be input binding: _Event Grid_, _Event Hubs_, _HTTP & webhooks_, _IoT Hub_, _Queue storage_, _SendGrid_, _Service Bus_, _Timer_</p>\n<p>Cannot be output binding: _IoT Hub_, _Timer_</p>\n<p>Available by default (<a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-register\" target=\"_blank\" rel=\"noopener noreferrer\">others need to be installed as separate package</a>): _Timer_, _HTTP & webhooks_</p>\n<p>Not supported on Consumption plan (<a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/functions-networking-options?tabs=azure-cli#premium-plan-with-virtual-network-triggers\" target=\"_blank\" rel=\"noopener noreferrer\">requires runtime-driven triggers</a>): _RabbitMQ_, _Kafka_</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Triggers and Bindings Gist",
        "content": "<p><pre><code class=\"language-cs\">// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook\n// Set Route to a string like &quot;products/{id}&quot; to create a custom URL for the function. This makes it accessible at https://&lt;APP_NAME&gt;.azurewebsites.net/api/&lt;FUNCTION_NAME&gt;/products/{id}\n[HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = &quot;blob/{name}&quot;)] HttpRequest req, string name;\n[HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = null)] HttpRequestMessage req; // return req.CreateResponse(HttpStatusCode.OK, string);\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob\n[BlobTrigger(&quot;container/{name}&quot;)] string myBlob, string name;\n[Blob(&quot;container/{name}&quot;, FileAccess.Read)] Stream myBlob; // or BlobContainerCLient, or BlobCLient\n[Blob(&quot;container/{name}&quot;, FileAccess.Write)] Stream myBlob;\n[Blob(&quot;container/{name}.jpg&quot;, FileAccess.Read)] Stream myBlob; // Wildcard in Blob Name: a jpg file\n[BlobOutput(&quot;test-samples-output/{name}-output.txt&quot;)]; // return obj;\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2\n[CosmosDBTrigger(\n            databaseName: &quot;databaseName&quot;,\n            containerName: &quot;containerName&quot;,\n            Connection = &quot;CosmosDBConnectionSetting&quot;,\n            LeaseContainerName = &quot;leases&quot;,\n            CreateLeaseContainerIfNotExists = true)]IReadOnlyList&lt;ToDoItem&gt; input;\n[CosmosDB(databaseName:&quot;myDb&quot;, collectionName:&quot;collection&quot;, Id = &quot;{id}&quot;, PartitionKey =&quot;{partitionKey}&quot;)] dynamic document; // input\n[CosmosDB(databaseName:&quot;myDb&quot;, collectionName:&quot;collection&quot;, CreateIfNotExists = true)] out dynamic document; // output\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid\n[EventGridTrigger]EventGridEvent ev; // ev.Data\n// No Input binding\n[return: EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;)] // return new EventGridEvent(...); or new CloudEvent(...)\n[EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;)] out eventGridEvent;\n[EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;)]IAsyncCollector&lt;EventGridEvent&gt; outputEvents; // (batch processing): outputEvents.AddAsync(myEvent)\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs\n[EventHubTrigger(&quot;hub&quot;, Connection = &quot;EventHubConnectionAppSetting&quot;)] EventData[] events; // var messageBody = Encoding.UTF8.GetString(eventData.Body.Array, eventData.Body.Offset, eventData.Body.Count);\n// No Input binding\n[return: EventHub(&quot;outputEventHubMessage&quot;, Connection = &quot;EventHubConnectionAppSetting&quot;)] // return string\n[EventHub(&quot;outputEventHubMessage&quot;, Connection = &quot;EventHubConnectionAppSetting&quot;)] IAsyncCollector&lt;string&gt; outputEvents; // (batch processing): outputEvents.AddAsync(string)\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-iot\n[IoTHubTrigger(&quot;messages/events&quot;, Connection = &quot;IoTHubConnectionAppSetting&quot;)]EventData message; // Encoding.UTF8.GetString(message.Body.Array)\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue\n[QueueTrigger(&quot;queue&quot;, Connection = &quot;StorageConnectionAppSetting&quot;)]string myQueueItem;\n// No Input binding\n[return: Queue(&quot;queue&quot;)] // return string\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus\n[ServiceBusTrigger(&quot;queue&quot;, Connection = &quot;ServiceBusConnectionAppSetting&quot;)] string myQueueItem;\n// No Input binding\n[return: ServiceBus(&quot;queue&quot;, Connection = &quot;ServiceBusConnectionAppSetting&quot;)] // return string\n\n// https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer\n// The 6-field format for cron jobs is `{second} {minute} {hour} {day} {month} {day-of-week}`. The 5-field format omits the `second` and starts with `{minute}`.\n// - Specific value: `5` (exactly the 5th minute)\n// - List: `5,10` (5th and 10th minute)\n// - Range: `9-17` (from 9 to 17)\n// - Step: `*/5` (every 5 units)\n// - Any value: `*` (every unit)\n// NOTE: Day of week: MON is 1, Sunday is 0 or 7; Day and Month start from 1\n// Examples: `*/5 * * * *`: Every 5 minutes,; `0 9-17 * * MON-FRI`: 9 AM to 5 PM on weekdays.\n[TimerTrigger(&quot;0 */5 * * * *&quot;)] TimerInfo myTimer;\n// - `WEBSITE_TIME_ZONE` and `TZ` are not currently supported on the Linux Consumption plan.\n// - RunOnStartup is not recommended for production (messes up schedule). Schedule, RunOnStartup and UseMonitor can be set in local.settings.json &gt; Values</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-13",
        "title": "Working with Azure Functions",
        "content": "<p><pre><code class=\"language-sh\"># List the existing application settings\naz functionapp config appsettings list --name $name --resource-group $resourceGroup\n\n# Add or update an application setting\naz functionapp config appsettings set --settings CUSTOM_FUNCTION_APP_SETTING=12345 --name $name --resource-group $resourceGroup\n\n# Create a new function app (Consumption)\naz functionapp create --resource-group $resourceGroup --name $consumptionFunctionName --consumption-plan-location $regionName --runtime dotnet --functions-version 3 --storage-account $storageName\n\n# Get the default (host) key that can be used to access any HTTP triggered function in the function app\nsubName=&#39;&lt;SUBSCRIPTION_ID&gt;&#39;\nresGroup=AzureFunctionsContainers-rg\nappName=glengagtestdocker\npath=/subscriptions/$subName/resourceGroups/$resGroup/providers/Microsoft.Web/sites/$appName/host/default/listKeys?api-version=2018-11-01\naz rest --method POST --uri $path --query functionKeys.default --output tsv</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "Authorization level",
        "content": "<p>Indicates the kind of authorization key that's required to access the function endpoint, via <code>code</code> param: <code>https://<APP_NAME>.azurewebsites.net/api/<FUNCTION_NAME>?code=<API_KEY></code>.</p>\n\n<ul>\n<li><strong>Anonymous</strong>: No API key is required.</li>\n<li><strong>Function</strong> (default): A function-specific or host-wide API key is required.</li>\n<li><strong>Admin</strong>: The master key is required.</li>\n</ul>\n\n<h4>Access scopes</h4>\n\n<ul>\n<li><strong>Function</strong> keys grant access only to the specific function they're defined under.</li>\n<li><strong>Host</strong> keys allow access to all functions within the function app.</li>\n<li><strong>master</strong>. provides administrative access to the runtime REST APIs. This key can't be revoked.</li>\n</ul>\n\n<p>Each key is named, with a <code>default</code> key at both levels. If a function and a host key share a name, the function key takes precedence.</p>\n\n<h4>Working with access keys</h4>\n\n<p>Base URL: <code><a href=\"https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/{scope}/{host-or-function-name}/{action}?api-version=2022-03-01\" target=\"_blank\" rel=\"noopener noreferrer\">https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/{scope}/{host-or-function-name}/{action}?api-version=2022-03-01</a></code></p>\n\n<p>Scope can be <code>functions</code> or <code>host</code>. For slots add <code>/slots/{slot-name}/</code> before scope.</p>\n\n<p>List keys: <code>POST</code>, action: <code>listkeys</code></p>\n<p>Create or update keys: <code>PUT</code>, action: <code>keys/{keyName}</code></p>\n<p>Delete or revoke keys: <code>DELETE</code>, action: <code>/keys/{keyName}</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-15",
        "title": "Client identities",
        "content": "<code>ClaimsPrincipal identity = req.HttpContext.User;</code> available via <code>X-MS-CLIENT-PRINCIPAL</code> <a href=\"https://learn.microsoft.com/en-us/azure/app-service/configure-authentication-user-identities#access-user-claims-in-app-code\" target=\"_blank\" rel=\"noopener noreferrer\">header</a>.",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-16",
        "title": "CORS",
        "content": "<p><pre><code class=\"language-sh\"># Add a domain to the allowed origins list\naz functionapp cors add --allowed-origins https://contoso.com --name $name --resource-group $resourceGroup\n\n# List the current allowed origins\naz functionapp cors show</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-17",
        "title": "Monitoring",
        "content": "<p>Automatic collection of Performance Counters isn't supported when running on Linux.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-18",
        "title": "Enable Application Insights",
        "content": "<p>Enabled by default for new functions (created in the same or nearest region to your function app), but it may have to be manually enabled for old functions.</p>\n\n<p>To send data, you need the key named <code>APPINSIGHTS_INSTRUMENTATIONKEY</code>. <code>ILogger</code> is used (not <code>TelemetryClient</code>!). Azure Functions use <a href=\"./Application%20Insights.md\" target=\"_blank\" rel=\"noopener noreferrer\">Adaptive sampling</a>.</p>\n\n<p>Application Insights are configured in <a href=\"https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json#applicationinsights\" target=\"_blank\" rel=\"noopener noreferrer\">host.json</a> (<code>logging.applicationInsights</code> and <code>aggregator</code>)</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-19",
        "title": "Configure monitorung",
        "content": "<p>Enable SQL query:</p>\n<p><pre><code class=\"language-json\">{\n  &quot;logging&quot;: {\n    &quot;applicationInsights&quot;: {\n      &quot;enableDependencyTracking&quot;: true,\n      &quot;dependencyTrackingOptions&quot;: {\n        &quot;enableSqlCommandTextInstrumentation&quot;: true\n      }\n    }\n  }\n}</code></pre></p>\n<p>Turn on verbose logging from the scale controller to Application Insights:</p>\n<p><pre><code class=\"language-sh\">az functionapp config appsettings set --settings SCALE_CONTROLLER_LOGGING_ENABLED=AppInsights:Verbose \\\n--name $name --resource-group $resourceGroup</code></pre></p>\n<p>Disable logging:</p>\n<p><pre><code class=\"language-sh\">az functionapp config appsettings delete --setting-names SCALE_CONTROLLER_LOGGING_ENABLED \\\n--name $name --resource-group $resourceGroup</code></pre></p>\n<h4>Categories</h4>\n\n<p>Identify which part of the system or user code generated the log.</p>\n\n<ul>\n<li><code>Function.<YOUR_FUNCTION_NAME></code>: Relates to dependency data, custom metrics and events, trace logs for function runs, and user-generated logs.</li>\n<li><code>Host.Aggregator</code>: Provides aggregated counts and averages of function invocations.</li>\n<li><code>Host.Results</code>: Records the success or failure of functions.</li>\n<li><code>Microsoft</code>: Reflects a .NET runtime component invoked by the host.</li>\n<li><code>Worker</code>: Logs generated by language worker processes for non-.NET languages.</li>\n</ul>\n\n<h4>Solutions with high volume of telemetry</h4>\n<p><pre><code class=\"language-jsonc\">{\n  &quot;version&quot;: &quot;2.0&quot;,\n  &quot;logging&quot;: {\n    &quot;logLevel&quot;: {\n      &quot;default&quot;: &quot;Warning&quot;,\n      &quot;Function&quot;: &quot;Error&quot;,\n      // Be aware of the `flushTimeout` (in aggregator) delay if you set a different value than Information\n      &quot;Host.Aggregator&quot;: &quot;Error&quot;,\n      &quot;Host.Results&quot;: &quot;Information&quot;,\n      &quot;Function.Function1&quot;: &quot;Information&quot;,\n      &quot;Function.Function1.User&quot;: &quot;Error&quot;\n    },\n    &quot;applicationInsights&quot;: {\n      &quot;samplingSettings&quot;: {\n        &quot;isEnabled&quot;: true,\n        &quot;maxTelemetryItemsPerSecond&quot;: 1,\n        &quot;excludedTypes&quot;: &quot;Exception&quot;\n      }\n    }\n  }\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-20",
        "title": "Custom Handlers",
        "content": "<p>Lightweight web servers that interact with the Azure Functions host. They can be implemented in any language that supports HTTP primitives.</p>\n\n<p>When an event occurs, the Azure Functions host forwards the request to the custom handler's web server, which executes the function and returns the output for further processing by the host.</p>\n\n<p>The custom handler web server needs to start within 60 seconds.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-21",
        "title": "Application structure",
        "content": "<ul>\n<li><code>host.json</code> - use the <code>customHandler.description.defaultExecutablePath</code> property to set the executable path and arguments</li>\n<li><code>local.settings.json</code> - set <code>FUNCTIONS_WORKER_RUNTIME</code> to \"custom\" for local development</li>\n<li>A command / script / executable, which runs a web server</li>\n<li>A <code>function.json</code> file for each function (<strong>inside a folder that matches the function name</strong>). Example: <code>MyFunctionName/function.json</code></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-22",
        "title": "HTTP-only function",
        "content": "<code>customHandler.enableForwardingHttpRequest</code> lets your HTTP-triggered function directly handle the original HTTP request and response instead of Azure's custom payloads. This makes your handler act more like a traditional web server. It's handy for simpler setups with no extra bindings or outputs, but keep in mind Azure Functions isn't a full-fledged reverse proxy—some features like HTTP/2 and WebSockets aren't supported. Think of it as giving your handler raw access to the HTTP action without Azure's middleman interference.",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-23",
        "title": "Triggers and Bindings full samples",
        "content": "<p><pre><code class=\"language-cs\">[HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = &quot;blob/{name}&quot;)] HttpRequest req, string name;\n\n[Blob(&quot;container/{name}&quot;, FileAccess.Read)] Stream myBlob; // FileAccess.Write\n\n[CosmosDBTrigger(\n    databaseName: &quot;database&quot;,\n    collectionName: &quot;collection&quot;,\n    ConnectionStringSetting = &quot;CosmosDBConnection&quot;, // Note: this refers to env var name, not an actual connection string\n    LeaseCollectionName = &quot;leases&quot;)]IReadOnlyList&lt;Document&gt; input;</code></pre></p>\n<p><pre><code class=\"language-cs\">////////////////////////////////////\n// Blob\n////////////////////////////////////\n\n[FunctionName(&quot;BlobTrigger&quot;)]\npublic static void RunBlob([BlobTrigger(&quot;container/{name}&quot;)] string myBlob, string name, ILogger log)\n{\n    log.LogInformation(__CODEBLOCK_1__quot;Blob trigger function processed blob\\n Name:{name} \\n Data: {myBlob}&quot;);\n}\n\n[FunctionName(&quot;BlobStorageInputBinding&quot;)]\npublic static void RunBlobStorageInputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = &quot;blob/{name}&quot;)] HttpRequest req, string name,\n    [Blob(&quot;container/{name}&quot;, FileAccess.Read)] Stream myBlob,\n    ILogger log)\n{\n    // Reads the content from the blob storage for further processing\n    using StreamReader reader = new StreamReader(myBlob);\n    string content = reader.ReadToEnd();\n    log.LogInformation(__CODEBLOCK_1__quot;Blob Content: {content}&quot;);\n}\n\n// [CosmosDBTrigger(...)] IReadOnlyList&lt;Document&gt; input,\n// [Blob(&quot;container/{input[0].Id}&quot;, FileAccess.Read)] Stream myBlob\n\n[FunctionName(&quot;BlobStorageOutputBinding&quot;)]\npublic static async Task&lt;IActionResult&gt; RunBlobStorageOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;blob/{name}&quot;)] HttpRequest req, string name,\n    [Blob(&quot;container/{name}&quot;, FileAccess.Write)] Stream myBlob,\n    ILogger log)\n{\n    // Writes the request body to a blob\n    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();\n    using StreamWriter writer = new StreamWriter(myBlob);\n    writer.Write(requestBody);\n    log.LogInformation(__CODEBLOCK_1__quot;Blob written: {name}&quot;);\n    return new OkResult();\n}\n\n////////////////////////////////////\n// CosmosDB\n////////////////////////////////////\n\n[FunctionName(&quot;CosmosDBTrigger&quot;)]\npublic static void RunCosmos([CosmosDBTrigger(\n    databaseName: &quot;database&quot;,\n    collectionName: &quot;collection&quot;,\n    ConnectionStringSetting = &quot;CosmosDBConnection&quot;, // Note: this refers to env var name, not an actual connection string\n    LeaseCollectionName = &quot;leases&quot;)]IReadOnlyList&lt;MyObj&gt; input, ILogger log)\n{\n    if (input != null &amp;&amp; input.Count &gt; 0)\n    {\n        log.LogInformation(&quot;Documents modified &quot; + input.Count);\n        log.LogInformation(&quot;First document Id &quot; + input[0].Id);\n    }\n}\n\n[FunctionName(&quot;CosmosDBInputBinding&quot;)]\npublic static void RunCosmosDBInputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = &quot;doc/{id}&quot;)] HttpRequest req, string id,\n    [CosmosDB(databaseName:&quot;myDb&quot;, collectionName:&quot;collection&quot;, Id = &quot;{id}&quot;, PartitionKey =&quot;{partitionKey}&quot;)] dynamic document,\n    ILogger log)\n{\n    // Retrieves a specific document from Cosmos DB for further processing\n    log.LogInformation(__CODEBLOCK_1__quot;Document Content: {document}&quot;);\n}\n\n[FunctionName(&quot;CosmosDBOutputBinding&quot;)]\npublic static IActionResult RunCosmosDBOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;doc/{id}&quot;)] HttpRequest req, string id,\n    [CosmosDB(databaseName:&quot;myDb&quot;, collectionName:&quot;collection&quot;, CreateIfNotExists =true)] out dynamic document,\n    ILogger log)\n{\n    // Writes a new document to Cosmos DB\n    string requestBody = new StreamReader(req.Body).ReadToEnd();\n    document = new { id = id, content = requestBody };\n    log.LogInformation(__CODEBLOCK_1__quot;Document written: {id}&quot;);\n    return new OkResult();\n}\n\n////////////////////////////////////\n// EventGrid\n////////////////////////////////////\n\n[FunctionName(&quot;EventGridTrigger&quot;)]\npublic static async Task RunEventGrid([EventGridTrigger]EventGridEvent eventGridEvent, ILogger log)\n{\n    log.LogInformation(eventGridEvent.Data.ToString());\n}\n\n// No Input binding\n\n[FunctionName(&quot;EventGridOutputBinding&quot;)]\n[return: EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;)]\npublic static async Task&lt;EventGridEvent&gt; RunEventGridOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;event/{subject}&quot;)] HttpRequest req, string subject,\n    ILogger log)\n{\n    // Sends an event to Event Grid Topic\n    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();\n    var eventGridEvent = new EventGridEvent(subject: &quot;IncomingRequest&quot;, eventType: &quot;IncomingRequest&quot;, dataVersion: &quot;1.0&quot;, data: requestBody);\n    log.LogInformation(__CODEBLOCK_1__quot;Event sent: {subject}&quot;);\n    return eventGridEvent;\n}\n\n// Output with out eventGridEvent\n[FunctionName(&quot;EventGridOutputBinding&quot;)]\n[return: EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;)]\npublic static async void RunEventGridOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;event/{subject}&quot;)] HttpRequest req, string subject,\n    EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;) out eventGridEvent\n    ILogger log)\n{\n    // Sends an event to Event Grid Topic\n    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();\n    eventGridEvent = new EventGridEvent(subject: &quot;IncomingRequest&quot;, eventType: &quot;IncomingRequest&quot;, dataVersion: &quot;1.0&quot;, data: requestBody);\n    log.LogInformation(__CODEBLOCK_1__quot;Event sent: {subject}&quot;);\n}\n\n// Output with out batch processing\n[FunctionName(&quot;EventGridOutputBinding&quot;)]\npublic static async Task RunEventGridOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;event/{subject}&quot;)] HttpRequest req, string subject,\n    [EventGrid(TopicEndpointUri = &quot;EventGridTopicUriAppSetting&quot;, TopicKeySetting = &quot;EventGridTopicKeyAppSetting&quot;)]IAsyncCollector&lt;EventGridEvent&gt; outputEvents,\n    ILogger log)\n{\n    // Sends an event to Event Grid Topic\n    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();\n    var myEvent = new EventGridEvent(subject: &quot;IncomingRequest&quot;, eventType: &quot;IncomingRequest&quot;, dataVersion: &quot;1.0&quot;, data: requestBody);\n    await outputEvents.AddAsync(myEvent);\n    log.LogInformation(__CODEBLOCK_1__quot;Event sent: {subject}&quot;);\n}\n\n////////////////////////////////////\n// EventHub\n////////////////////////////////////\n\n[FunctionName(&quot;EventHubTrigger&quot;)]\npublic static async Task RunEventHub([EventHubTrigger(&quot;hub&quot;, Connection = &quot;EventHubConnectionAppSetting&quot;)] EventData[] events, ILogger log)\n{\n    foreach (EventData eventData in events)\n    {\n        string messageBody = Encoding.UTF8.GetString(eventData.Body.Array, eventData.Body.Offset, eventData.Body.Count);\n        log.LogInformation(__CODEBLOCK_1__quot;Event Hub trigger function processed a message: {messageBody}&quot;);\n    }\n}\n\n// No Input binding\n\n[FunctionName(&quot;EventHubOutputBinding&quot;)]\n[return: EventHub(&quot;outputEventHubMessage&quot;, Connection = &quot;EventHubConnectionAppSetting&quot;)]\npublic static async string RunEventHubOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;event/{message}&quot;)] HttpRequest req, string message\n    ILogger log)\n{\n    // Sends an event to Event Hub\n    log.LogInformation(__CODEBLOCK_1__quot;Event sent: {message}&quot;);\n    return message;\n}\n\n// Output with out batch processing\n[FunctionName(&quot;EventHubOutputBinding&quot;)]\npublic static async Task RunEventHubOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;event/{message}&quot;)] HttpRequest req, string message,\n    [EventHub(&quot;outputEventHubMessage&quot;, Connection = &quot;EventHubConnectionAppSetting&quot;)] IAsyncCollector&lt;string&gt; outputEvents,\n    ILogger log)\n{\n    // Sends an event to Event Hub\n    await outputEvents.AddAsync(message);\n    log.LogInformation(__CODEBLOCK_1__quot;Event sent: {message}&quot;);\n}\n\n////////////////////////////////////\n// IoTHub\n////////////////////////////////////\n\n[FunctionName(&quot;IoTHubTrigger&quot;)]\npublic static async Task RunIoTHub([IoTHubTrigger(&quot;messages/events&quot;, Connection = &quot;IoTHubConnectionAppSetting&quot;)]EventData message, ILogger log)\n{\n    log.LogInformation(__CODEBLOCK_1__quot;IoT Hub trigger function processed a message: {Encoding.UTF8.GetString(message.Body.Array)}&quot;);\n}\n\n// No Input binding\n\n////////////////////////////////////\n// Http\n////////////////////////////////////\n\n// Accessible via GET https://&lt;APP_NAME&gt;.azurewebsites.net/api/&lt;FUNCTION_NAME&gt;\n// You can specify a custom route by setting Route to a string.\n// For example, Route = &quot;products/{id}&quot; would make the function accessible at https://&lt;APP_NAME&gt;.azurewebsites.net/api/&lt;FUNCTION_NAME&gt;/products/{id}.\n\n// Request length limit: 100 MB\n// URL length limit: 4 KB\n// Timeout: 230s (502 error)\n\n[FunctionName(&quot;HttpTriggerFunction&quot;)]\npublic static async Task&lt;HttpResponseMessage&gt; Run([HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = null)] HttpRequestMessage req, ILogger log)\n{\n    log.LogInformation(&quot;C# HTTP trigger function processed a request.&quot;);\n    return req.CreateResponse(HttpStatusCode.OK, &quot;Hello from Azure Functions!&quot;);\n}\n\n// No Input binding\n\n// No Output binding\n\n////////////////////////////////////\n// Queue\n////////////////////////////////////\n\n[FunctionName(&quot;QueueTrigger&quot;)]\npublic static void RunQueue([QueueTrigger(&quot;queue&quot;, Connection = &quot;StorageConnectionAppSetting&quot;)]string myQueueItem, ILogger log)\n{\n    log.LogInformation(__CODEBLOCK_1__quot;Queue trigger function processed: {myQueueItem}&quot;);\n}\n\n// No Input binding\n\n[FunctionName(&quot;QueueStorageOutputBinding&quot;)]\n[return: Queue(&quot;queue&quot;)]\npublic static string RunQueueStorageOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;queue/{message}&quot;)] HttpRequest req, string message\n    ILogger log)\n{\n    // Sends a message to Azure Queue Storage\n    log.LogInformation(__CODEBLOCK_1__quot;Message sent: {message}&quot;);\n    return message;\n}\n\n[FunctionName(nameof(AddMessages))]\npublic static void AddMessages(\n[HttpTrigger(AuthorizationLevel.Anonymous, &quot;get&quot;, &quot;post&quot;, Route = null)] HttpRequest req,\n[Queue(&quot;outqueue&quot;), StorageAccount(&quot;AzureWebJobsStorage&quot;)] ICollector&lt;string&gt; msg,\nILogger log)\n{\n    msg.Add(&quot;First&quot;);\n    msg.Add(&quot;Second&quot;);\n}\n\n////////////////////////////////////\n// ServiceBus\n////////////////////////////////////\n\n[FunctionName(&quot;ServiceBusTrigger&quot;)]\npublic static async Task RunServiceBus([ServiceBusTrigger(&quot;queue&quot;, Connection = &quot;ServiceBusConnectionAppSetting&quot;)] string myQueueItem, ILogger log)\n{\n    log.LogInformation(__CODEBLOCK_1__quot;Service Bus Queue trigger function processed message: {myQueueItem}&quot;);\n}\n\n// No Input binding\n\n[FunctionName(&quot;ServiceBusOutputBinding&quot;)]\n[return: ServiceBus(&quot;queue&quot;, Connection = &quot;ServiceBusConnectionAppSetting&quot;)]\npublic static string RunServiceBusOutputBinding(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;post&quot;, Route = &quot;servicebus/{message}&quot;)] HttpRequest req, string message,\n    ILogger log)\n{\n    // Sends a message to Service Bus Queue\n    log.LogInformation(__CODEBLOCK_1__quot;Message sent: {message}&quot;);\n    return message;\n}\n\n////////////////////////////////////\n// Timer\n////////////////////////////////////\n\n[FunctionName(&quot;TimerTriggerFunction&quot;)]\npublic static void Run(\n    [TimerTrigger(&quot;0 */5 * * * *&quot;)] TimerInfo myTimer, ILogger log)\n{\n    log.LogInformation(__CODEBLOCK_1__quot;C# Timer trigger function executed at: {DateTime.Now}&quot;);\n}\n\n// No Input binding\n\n// No Output bindong</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 5
      },
      {
        "id": "section-24",
        "title": "CLI",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Command</th>\n      <th>Brief Explanation</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp/plan?view=azure-cli-latest#az-functionapp-plan-create\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp plan create</a></td>\n      <td>Create an Azure Function App plan.</td>\n      <td><code>az functionapp plan create --name MyPlan --resource-group $resourceGroup --sku Y1 --is-linux</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp/plan?view=azure-cli-latest#az-functionapp-plan-update\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp plan update</a></td>\n      <td>Update a Function App plan.</td>\n      <td><code>az functionapp plan update --name MyPlan --sku Y2</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp/plan?view=azure-cli-latest#az-functionapp-plan-list\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp plan list</a></td>\n      <td>List function app plans.</td>\n      <td><code>az functionapp plan list --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-list\" target=\"_blank\" rel=\"noopener noreferrer\">az appservice plan list</a></td>\n      <td>List app service plans.</td>\n      <td><code>az appservice plan list --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp?view=azure-cli-latest#az-functionapp-show\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp show</a></td>\n      <td>Show the details of a function app.</td>\n      <td><code>az functionapp show --name MyFunctionApp --resource-group $resourceGroup</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp?view=azure-cli-latest#az-functionapp-create\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp create</a></td>\n      <td>Create a function app.</td>\n      <td><code>az functionapp create --name MyFunctionApp --storage-account mystorageaccount --consumption-plan-location eastus</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp/config/appsettings?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp config appsettings</a></td>\n      <td>Manage function app settings.</td>\n      <td><code>az functionapp config appsettings set --name MyFunctionApp --settings KEY=VALUE</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp/cors?view=azure-cli-latest#az-functionapp-cors-add\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp cors add</a></td>\n      <td>Add allowed origins to function app.</td>\n      <td><code>az functionapp cors add --name MyFunctionApp --allowed-origins '<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://example.com</a>'</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/functionapp/cors?view=azure-cli-latest#az-functionapp-cors-show\" target=\"_blank\" rel=\"noopener noreferrer\">az functionapp cors show</a></td>\n      <td>Show details of CORS for a function app.</td>\n      <td><code>az functionapp cors show --name MyFunctionApp</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/resource?view=azure-cli-latest#az-resource-update\" target=\"_blank\" rel=\"noopener noreferrer\">az resource update</a></td>\n      <td>Update a resource.</td>\n      <td><code>az resource update --ids RESOURCE_ID --set properties.key=value</code></td>\n    </tr>\n    <tr>\n      <td><a href=\"https://learn.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az-rest\" target=\"_blank\" rel=\"noopener noreferrer\">az rest</a></td>\n      <td>Invoke a custom request.</td>\n      <td><code>az rest --uri /subscriptions/{subscriptionId}/resourcegroups?api-version=2019-10-01</code></td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 2
      }
    ],
    "relatedTopics": [
      "App Service",
      "Application Insights",
      "Azure Portal",
      "Blob Storage"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "microsoft-graph",
    "topic": "microsoft-graph",
    "title": "Microsoft Graph",
    "description": "Provides a unified programmability model that you can use to access data in Microsoft 365, Windows 10, and Enterprise Mobility + Security. - Endpoint: https://graph.microsoft.com. Can manage user a...",
    "difficulty": "Beginner",
    "estimatedReadTime": 14,
    "tags": [
      "Graph",
      "API",
      "REST",
      "JSON",
      "Cli",
      "cli"
    ],
    "learningObjectives": [
      "HTTP _Authorization_ request header, as a _Bearer_ token",
      "[Pagination](https://learn.microsoft.com/en-us/graph/paging) is handled via `@odata.nextLink`.",
      "For the CRUD methods `GET` and `DELETE`, no request body is required."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Experience with REST APIs and HTTP protocols",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Provides a unified programmability model that you can use to access data in Microsoft 365, Windows 10, and Enterprise Mobility + Security.</p>\n\n<ul>\n<li>Endpoint: <code><a href=\"https://graph.microsoft.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com</a></code>. Can manage user and device identity, access, compliance, security, and help protect organizations from data leakage or loss.</li>\n</ul>\n\n<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/microsoftsearch/connectors-overview\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft Graph connectors</a>: delivering <strong>data external to the Microsoft cloud into Microsoft Graph services and applications</strong> (Box, Google Drive, Jira, and Salesforce).</li>\n<li><a href=\"https://learn.microsoft.com/en-us/graph/data-connect-concept-overview\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft Graph Data Connect</a>: delivering <strong>Microsoft Graph data to popular Azure data stores</strong>.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Resources",
        "content": "<p>Resource specify the entity or complex type you're interacting with, like <code>me</code>, <code>user</code>, <code>group</code>, <code>drive</code>, or <code>site</code>. Top-level resources may have relationships, allowing access to other resources, like <code>me/messages</code> or <code>me/drive</code>. Interactions with resources are done through methods, e.g., <code>me/sendMail</code> for sending an email. Permissions needed for each resource may vary, with higher permissions often required for creation or updates compared to reading. <a href=\"https://learn.microsoft.com/en-us/graph/permissions-reference\" target=\"_blank\" rel=\"noopener noreferrer\">More on permissions</a>.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Headers",
        "content": "<p>Include standard and custom HTTP types. Certain APIs might need extra headers in requests. Mandatory headers like the <code>request-id</code> are always returned by Microsoft Graph, and certain headers, like <code>Retry-After</code> during throttling or <code>Location</code> for long-running operations, are specific to certain APIs or features.</p>\n\n<strong>Evolvable enumerations</strong>: By default, a GET operation returns only known (existing) members for properties. Adding members to existing enumerations can break applications already using these enums. You can opt in to receive all members by using an HTTP <code>Prefer</code> request header.",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Query Microsoft Graph by using REST",
        "content": "<a href=\"https://developer.microsoft.com/en-us/graph/graph-explorer\" target=\"_blank\" rel=\"noopener noreferrer\">Graph Explorer</a>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Metadata",
        "content": "<code><a href=\"https://graph.microsoft.com/v1.0/$metadata\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/$metadata</a></code>\n\n<p>Metadata in Microsoft Graph provides insight into its data model, including entity types, complex types, and enumerations present in request and response data. It defines types, methods, and enumerations in OData namespaces, with most of the API in the namespace <code>microsoft.graph</code> and some in subnamespaces like <code>microsoft.graph.callRecords</code>. It helps understand relationships between entities and enables URL navigation between them.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Using REST",
        "content": "<p><pre><code class=\"language-http\">{HTTP method} https://graph.microsoft.com/{version}/{resource}?{query-parameters}</code></pre></p>\n<ul>\n<li>HTTP _Authorization_ request header, as a _Bearer_ token</li>\n<li><a href=\"https://learn.microsoft.com/en-us/graph/paging\" target=\"_blank\" rel=\"noopener noreferrer\">Pagination</a> is handled via <code>@odata.nextLink</code>.</li>\n</ul>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Method</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>GET</td>\n      <td>Read data from a resource.</td>\n    </tr>\n    <tr>\n      <td>POST</td>\n      <td>Create a new resource, or perform an action.</td>\n    </tr>\n    <tr>\n      <td>PATCH</td>\n      <td>Update a resource with new values.</td>\n    </tr>\n    <tr>\n      <td>PUT</td>\n      <td>Replace a resource with a new one.</td>\n    </tr>\n    <tr>\n      <td>DELETE</td>\n      <td>Remove a resource.</td>\n    </tr>\n  </tbody>\n</table>\n\n<ul>\n<li>For the CRUD methods <code>GET</code> and <code>DELETE</code>, no request body is required.</li>\n<li>The <code>POST</code>, <code>PATCH</code>, and <code>PUT</code> methods require a request body specified in JSON format.</li>\n</ul>\n\n<h4>Examples</h4>\n\n<p>Sure, here's the table based on the provided information:</p>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Operation</th>\n      <th>URL</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>GET my profile</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my files</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/drive/root/children\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/drive/root/children</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my photo</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/photo/$value\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/photo/$value</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my photo metadata</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/photo/\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/photo/</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my mail</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/messages\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/messages</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my high importance email</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/messages?$filter=importance\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/messages?$filter=importance</a> eq 'high'</code></td>\n    </tr>\n    <tr>\n      <td>GET my calendar events</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/events\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/events</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my manager</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/manager\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/manager</a></code></td>\n    </tr>\n    <tr>\n      <td>GET last user to modify file foo.txt</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/drive/root/children/foo.txt/lastModifiedByUser\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/drive/root/children/foo.txt/lastModifiedByUser</a></code></td>\n    </tr>\n    <tr>\n      <td>GET Microsoft 365 groups I'm a member of</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/memberOf/$/microsoft.graph.group?$filter=groupTypes/any(a:a\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/memberOf/$/microsoft.graph.group?$filter=groupTypes/any(a:a</a> eq 'unified')</code></td>\n    </tr>\n    <tr>\n      <td>GET users in my organization</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/users\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/users</a></code></td>\n    </tr>\n    <tr>\n      <td>GET groups in my organization</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/groups\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/groups</a></code></td>\n    </tr>\n    <tr>\n      <td>GET people related to me</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/people\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/people</a></code></td>\n    </tr>\n    <tr>\n      <td>GET items trending around me</td>\n      <td><code><a href=\"https://graph.microsoft.com/beta/me/insights/trending\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/beta/me/insights/trending</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my recent activities</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0//me/activities/recent\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0//me/activities/recent</a></code></td>\n    </tr>\n    <tr>\n      <td>PATCH (update) a recent activity of mine</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0//me/activities/{activityId}\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0//me/activities/{activityId}</a></code></td>\n    </tr>\n    <tr>\n      <td>GET my notes</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/me/onenote/notebooks\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/me/onenote/notebooks</a></code></td>\n    </tr>\n    <tr>\n      <td>Select specific fields</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/groups?$filter=adatumisv_courses/id\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/groups?$filter=adatumisv_courses/id</a> eq '123'&$select=id,displayName,adatumisv_courses</code></td>\n    </tr>\n    <tr>\n      <td>Alerts, filter by Category, top 5</td>\n      <td><code><a href=\"https://graph.microsoft.com/v1.0/security/alerts?$filter=Category\" target=\"_blank\" rel=\"noopener noreferrer\">https://graph.microsoft.com/v1.0/security/alerts?$filter=Category</a> eq 'ransomware'&$top=5</code></td>\n    </tr>\n  </tbody>\n</table>\n\n<h4>Using MSAL</h4>\n<p><pre><code class=\"language-cs\">var authority = &quot;https://login.microsoftonline.com/&quot; + tenantId;\nvar scopes = new []{ &quot;https://graph.microsoft.com/.default&quot; };\n\nvar app = ConfidentialClientApplicationBuilder.Create(clientId)\n    .WithAuthority(authority)\n    .WithClientSecret(clientSecret)\n    .Build();\n\nvar result = await app.AcquireTokenForClient(scopes).ExecuteAsync();\n\nvar httpClient = new HttpClient();\nvar request = new HttpRequestMessage(HttpMethod.Get, &quot;https://graph.microsoft.com/v1.0/me&quot;);\nrequest.Headers.Authorization = new AuthenticationHeaderValue(&quot;Bearer&quot;, result.AccessToken);\n\nvar response = await httpClient.SendAsync(request);\nvar content = await response.Content.ReadAsStringAsync();</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-7",
        "title": "Using SDK",
        "content": "<p><pre><code class=\"language-csharp\">var scopes = new[] { &quot;User.Read&quot; };\n\n// Multi-tenant apps can use &quot;common&quot;,\n// single-tenant apps must use the tenant ID from the Azure portal\nvar tenantId = &quot;common&quot;;\n\n// Value from app registration\nvar clientId = &quot;YOUR_CLIENT_ID&quot;;\n\n// using Azure.Identity;\nvar options = new TokenCredentialOptions\n{\n    AuthorityHost = AzureAuthorityHosts.AzurePublicCloud\n};\n\n// Using device code: https://learn.microsoft.com/dotnet/api/azure.identity.devicecodecredential\nvar deviceOptions = new DeviceCodeCredentialOptions\n{\n    AuthorityHost = AzureAuthorityHosts.AzurePublicCloud,\n    ClientId = clientId,\n    TenantId = tenantId,\n    // Callback function that receives the user prompt\n    // Prompt contains the generated device code that user must\n    // enter during the auth process in the browser\n    DeviceCodeCallback = (code, cancellation) =&gt;\n    {\n        Console.WriteLine(code.Message);\n        return Task.FromResult(0);\n    },\n};\nvar credential = new DeviceCodeCredential(deviceOptions);\n// var credential = new DeviceCodeCredential(callback, tenantId, clientId, options);\n\n// Using a client certificate: https://learn.microsoft.com/dotnet/api/azure.identity.clientcertificatecredential\n// var clientCertificate = new X509Certificate2(&quot;MyCertificate.pfx&quot;);\n// var credential = new ClientCertificateCredential(tenantId, clientId, clientCertificate, options);\n\n// Using a client secret: https://learn.microsoft.com/dotnet/api/azure.identity.clientsecretcredential\n// var credential = new ClientSecretCredential(tenantId, clientId, clientSecret, options);\n\n// On-behalf-of provider\n// var oboToken = &quot;JWT_TOKEN_TO_EXCHANGE&quot;;\n// var onBehalfOfCredential = new OnBehalfOfCredential(tenantId, clientId, clientSecret, oboToken, options);\n\nvar graphClient = new GraphServiceClient(credential, scopes);\n\nvar user = await graphClient.Me.GetAsync();\n\nvar messages = await graphClient.Me.Messages\n.GetAsync(requestConfig =&gt;\n{\n    requestConfig.QueryParameters.Select =\n        new string[] { &quot;subject&quot;, &quot;sender&quot; };\n    requestConfig.QueryParameters.Filter =\n        &quot;subject eq &#39;Hello world&#39;&quot;;\n\n    requestConfig.Headers.Add(\n        &quot;Prefer&quot;, @&quot;outlook.timezone=&quot;&quot;Pacific Standard Time&quot;&quot;&quot;);\n});\n\nvar message = await graphClient.Me.Messages[messageId].GetAsync();\n\nvar newCalendar = await graphClient.Me.Calendars\n    .PostAsync(new Calendar { Name = &quot;Volunteer&quot; }); // new\n\nawait graphClient.Teams[&quot;teamId&quot;]\n    .PatchAsync(new Team { }); // update\n\nawait graphClient.Me.Messages[messageId]\n    .DeleteAsync();</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-8",
        "title": "Token acquisition flow",
        "content": "<ul>\n<li><strong>Acquire an Authorization Code</strong>: <code>GET <a href=\"https://login.microsoftonline.com/{tenant}/oauth2/authorize\" target=\"_blank\" rel=\"noopener noreferrer\">https://login.microsoftonline.com/{tenant}/oauth2/authorize</a></code></li>\n<li><strong>Acquire an Access Token</strong>: <code>POST <a href=\"https://login.microsoftonline.com/customer.com/oauth2/token\" target=\"_blank\" rel=\"noopener noreferrer\">https://login.microsoftonline.com/customer.com/oauth2/token</a></code></li>\n<li><strong>Call Microsoft Graph</strong>:</li>\n</ul>\n\n<p><pre><code class=\"language-http\">GET https://graph.microsoft.com/beta/users\n  Authorization: Bearer &lt;token&gt;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Permissions",
        "content": "<code><Resource>.<Permission></code> or <code><Resource>.<Permission>.<Optional-Constrain></code>\n\n<p>Example for <code>Users</code>:</p>\n\n<ul>\n<li>Current user: <code>User.Read</code>, <code>User.ReadWrite</code></li>\n<li>All users (require admin consent): <code>User.Read.All</code>, <code>User.ReadWrite.All</code>, <code>User.ReadBasic.All</code> (no admin consent)</li>\n</ul>\n\n<p>The optional <code>All</code> sonstrain grants access to all users.</p>\n\n<p>Example for <code>Calendars</code>:</p>\n\n<ul>\n<li>Current user's calendars: <code>Calendars.Read</code>, <code>Calendars.ReadWrite</code></li>\n<li>Calendars shared with current user: <code>Calendars.Read.Shared</code>, <code>Calendars.ReadWrite.Shared</code></li>\n</ul>\n\n<p>The optional <code>Shared</code> constrain grants access to calendars user has access to, there is no <code>All</code> contrain.</p>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Azure Portal",
      "Events"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/graph/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "key-vault",
    "topic": "key-vault",
    "title": "Azure Key Vault",
    "description": "Endpoint: https://vault.azure.net - Azure Key Vault securely stores secrets, keys, and certificates. - Available in two tiers: Standard for software encryption, Premium for HSM-protected keys.",
    "difficulty": "Advanced",
    "estimatedReadTime": 25,
    "tags": [
      "Key Vault",
      "key vault",
      "Event Grid",
      "JSON",
      "api",
      "cli"
    ],
    "learningObjectives": [
      "Azure Key Vault securely stores secrets, keys, and certificates.",
      "Available in two tiers: Standard for software encryption, Premium for HSM-protected keys.",
      "Centralizes security data to minimize leaks and avoid storing sensitive info in code.",
      "Management plane: for managing the Key Vault itself",
      "[az keyvault secret](https://learn.microsoft.com/en-us/cli/azure/keyvault/secret?view=azure-cli-latest)"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Endpoint: <code><a href=\"https://vault.azure.net\" target=\"_blank\" rel=\"noopener noreferrer\">https://vault.azure.net</a></code></p>\n\n<ul>\n<li>Azure Key Vault securely stores secrets, keys, and certificates.</li>\n<li>Available in two tiers: <strong>Standard</strong> for software encryption, <strong>Premium</strong> for HSM-protected keys.</li>\n<li>Centralizes security data to minimize leaks and avoid storing sensitive info in code.</li>\n<li>Offers monitoring to track key and secret access.</li>\n<li>Scales automatically and ensures high availability through data replication.</li>\n<li>Automates certificate tasks.</li>\n<li>Integrates with other Azure services for disk and database encryption.</li>\n</ul>\n\n<code>az keyvault create --name <YourKeyVaultName> --resource-group $resourceGroup --location <YourLocation></code>\n\n<p>Set secret: <code>az keyvault secret set --vault-name $myKeyVault --name \"ExamplePassword\" --value \"hVFkk965BuUv\"</code></p>\n\n<p>Retrieve secret (in _JSON_ format): <code>az keyvault secret show --name \"ExamplePassword\" --vault-name $myKeyVault</code> (<code>value</code> property contains the secret value)</p>\n\n<p>Get secret version: <code>GET {vaultBaseUrl}/secrets/{secret-name}/{secret-version}?api-version=7.4</code></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Key operations",
        "content": "<p>Rotating secrets:</p>\n\n<ul>\n<li><code>az keyvault key rotate</code>: manual rotation.</li>\n<li><code>az keyvault key rotation-policy</code>: automated rotation (ex: time).</li>\n</ul>\n\n<p>Removing keys:</p>\n\n<ul>\n<li><code>az keyvault key delete</code>: put key in soft delete state (if enabled, or simply removes it)</li>\n<li><code>az keyvault key purge</code>: permanently removes soft deleted key (<strong>only</strong>)</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Access Model",
        "content": "<ul>\n<li><strong>Management plane</strong>: for managing the Key Vault itself</li>\n<li><strong>Data plane</strong>: for working with the data stored in the Key Vault</li>\n</ul>\n\n<p>Both planes use Azure Microsoft Entra ID for authentication, and <a href=\"https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli\" target=\"_blank\" rel=\"noopener noreferrer\">RBAC</a> for authorization (access control). _Data plane_ also uses a <a href=\"https://learn.microsoft.com/en-us/azure/key-vault/general/assign-access-policy?tabs=azure-portal\" target=\"_blank\" rel=\"noopener noreferrer\">access policies</a> (legacy) for authorization. Minimum standard role for granting management and data (policies) access: <code>Contributor</code>.</p>\n<p><pre><code class=\"language-sh\">az keyvault set-policy --name myKeyVault --object-id &lt;object-id&gt; --secret-permissions &lt;secret-permissions&gt; --key-permissions &lt;key-permissions&gt; --certificate-permissions &lt;certificate-permissions&gt;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Authentication",
        "content": "<p>Key Vault is associated with the Entra ID tenant of the subscription and all callers must register in this tenant and authenticate to access the key vault.</p>\n\n<p>For applications, there are two ways to obtain a service principal:</p>\n\n<ul>\n<li>Enable a system-assigned <strong>managed identity</strong> (recommended) for the application. With managed identity, Azure internally manages the application's service principal and automatically authenticates the application with other Azure services. Managed identity is available for applications deployed to various services.</li>\n<li>If you can't use managed identity, you instead register the application with your Entra ID tenant. Registration also creates a second application object that identifies the app across all tenants.</li>\n</ul>\n\n<code>var client = new SecretClient(new Uri(\"<YourVaultUri>\"), new DefaultAzureCredential());</code>\n\n<p>Authentication using REST:</p>\n<p><pre><code class=\"language-http\">PUT https://&lt;your-key-vault-name&gt;.vault.azure.net/keys/&lt;your-key-name&gt;?api-version=7.2 HTTP/1.1\nAuthorization: Bearer &lt;access_token&gt; # token obtained from Microsoft Entra ID</code></pre></p>\n<p>If Authorization token is missing or rejected:</p>\n<p><pre><code class=\"language-http\">401 Not Authorized\nWWW-Authenticate: Bearer authorization=&quot;…&quot;, resource=&quot;…&quot;</code></pre></p>\n<p>The <code>WWW-Authenticate</code> header parameters are:</p>\n\n<ul>\n<li><code>authorization</code>: OAuth2 authorization service address.</li>\n<li><code>resource</code>: Resource name (<code><a href=\"https://vault.azure.net\" target=\"_blank\" rel=\"noopener noreferrer\">https://vault.azure.net</a></code>) for the authorization request.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Restricting access",
        "content": "<p>For secure, single-resource access to Azure Key Vault secrets, use System Managed Identities to avoid hardcoding credentials. Using managed identities or environment variables can expose them in your code.</p>\n\n<p>Limit vault access to specific IPs via <strong>virtual network service endpoints</strong>.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Data Transit Encryption",
        "content": "<p>Secure communication through <strong>HTTPS</strong> and <strong>TLS</strong> (min 1.2).</p>\n\n<strong>Perfect Forward Secrecy</strong> (PFS - protects connections between customer and cloud services by unique keys) and RSA-based 2,048-bit encryption key lengths secure connections.",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Certificates",
        "content": "<p>Create an access policy for your key vault that grants certificate permissions to your user account:</p>\n<p><pre><code class=\"language-sh\">az keyvault set-policy --name &lt;your-key-vault-name&gt; --upn user@domain.com --certificate-permissions delete get list create purge</code></pre></p>\n<p>Store and retieve certificates:</p>\n<p><pre><code class=\"language-cs\">var client = new CertificateClient(new Uri(__CODEBLOCK_1__quot;https://{keyVaultName}.vault.azure.net&quot;), new DefaultAzureCredential());\n\n// Create certificate\nvar operation = await client.StartCreateCertificateAsync(certificateName, CertificatePolicy.Default);\nawait operation.WaitForCompletionAsync();\n\n// Retrieve\nvar certificate = await client.GetCertificateAsync(certificateName);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Best Practices",
        "content": "<ul>\n<li>Use a separate vault for each application and environment (production, test, staging).</li>\n<li>Restrict vault access to authorized applications and users. (<code>az keyvault set-policy --name <YourKeyVaultName> --object-id <PrincipalObjectId> --secret-permissions get list</code>)</li>\n<li>Regularly backup your vault. (<code>az keyvault key backup --vault-name <YourKeyVaultName> --name <KeyName> --file <BackupFileName></code>)</li>\n<li>Enable logging and alerts.</li>\n<li>Enable <strong>soft-delete</strong> and <strong>purge protection</strong> to keep secrets for 7-90 days and prevent forced deletion. Charges apply for HSM-keys in the last 30 days of use. Operations are disabled on deleted objects, and no charges apply. (NOTE: _soft-delete_ increased security, but also _increases storage cost_!)</li>\n</ul>\n\n<p><pre><code class=\"language-sh\">az keyvault update --name &lt;YourKeyVaultName&gt; --enable-soft-delete true\n  az keyvault update --name &lt;YourKeyVaultName&gt; --enable-purge-protection true</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Disaster and recovery",
        "content": "<p>Redundancy: Data is usually replicated within the primary region and to a secondary region (except for some countries where data regulation require to keep it in the same region with ZRS). For AKV Premium, data from HSMs is replicated to only two regions. If a primary Azure region becomes unavailable, requests are automatically rerouted to a secondary region. Note that some regions don't support failover and the key vault becomes read-only during this time. Users in these regions should prepare for recovery plans.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Disk Encryption (Windows, Linux)",
        "content": "<p>```sh</p>\n<p>az login</p>\n\n<h1>A resource group is a logical container into which Azure resources are deployed and managed.</h1>\n<p>az group create --name $resourceGroup --location eastus</p>\n\n<h1>Create a key vault in the same region and tenant as the VMs to be encrypted.</h1>\n<h1>The key vault will be used to control and manage disk encryption keys and secrets.</h1>\n<p>az keyvault create --name \"<keyvault-id>\" --resource-group $resourceGroup --location \"eastus\"</p>\n\n<h1>Update the key vault's advanced access policies</h1>\n<p>az keyvault update --name \"<keyvault-id>\" --resource-group $resourceGroup --enabled-for-disk-encryption \"true\"</p>\n<h1>Enables the Microsoft.Compute resource provider to retrieve secrets from this key vault when this key vault is referenced in resource creation, for example when creating a virtual machine.</h1>\n<p>az keyvault update --name \"<keyvault-id>\" --resource-group $resourceGroup --enabled-for-deployment \"true\"</p>\n<h1>Allow Resource Manager to retrieve secrets from the vault.</h1>\n<p>az keyvault update --name \"<keyvault-id>\" --resource-group $resourceGroup --enabled-for-template-deployment \"true\"</p>\n\n<h1>This step is optional. When a key encryption key (KEK) is specified, Azure Disk Encryption uses that key to wrap the encryption secrets before writing to Key Vault.</h1>\n<p>az keyvault key create --name \"myKEK\" --vault-name \"<keyvault-id>\" --kty RSA --size 4096</p>\n\n<h1>Enable disk encryption:</h1>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Optionally use KEK by name",
        "content": "<p>az vm encryption enable -g $resourceGroup --name \"myVM\" --disk-encryption-keyvault \"<keyvault-id>\" --key-encryption-key \"myKEK\"</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Monitoring Key Vault with Azure Event Grid",
        "content": "<code>Portal > All Services > Key Vaults > key vault > Events > Event Grid Subscriptions > + Event Subscription</code> and fill in the details including name, event types, and endpoint (like an Azure Function).\n<p><pre><code class=\"language-cs\">[FunctionName(&quot;KeyVaultMonitoring&quot;)]\npublic static async Task&lt;IActionResult&gt; Run(\n    [HttpTrigger(AuthorizationLevel.Function, &quot;get&quot;, &quot;post&quot;, Route = null)] HttpRequest req, ILogger log)\n{\n    var requestBody = await new StreamReader(req.Body).ReadToEndAsync();\n    var eventGridEvent = EventGridEvent.Parse(new BinaryData(requestBody));\n\n    switch(eventGridEvent.EventType)\n    {\n        case SystemEventNames.KeyVaultCertificateNewVersionCreated:\n        case SystemEventNames.KeyVaultSecretNewVersionCreated:\n            log.LogInformation(__CODEBLOCK_0__quot;New Key Vault secret/certificate version created event. Data: {eventGridEvent.Data}&quot;); break;\n        case SystemEventNames.KeyVaultKeyNewVersionCreated:\n            log.LogInformation(__CODEBLOCK_0__quot;New Key Vault key version created event. Data: {eventGridEvent.Data}&quot;); break;\n        default:\n            log.LogInformation(__CODEBLOCK_0__quot;Event Grid Event of type {eventGridEvent.EventType} occurred, but it&#39;s not processed.&quot;); break;\n    }\n\n    return new OkResult();\n}</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Working with KeyVault",
        "content": "<p><pre><code class=\"language-cs\">// Fetching a secret\nvar secretClient = new SecretClient(vaultUri: new Uri(vaultUrl), credential: new DefaultAzureCredential());\nKeyVaultSecret secret = await secretClient.GetSecretAsync(&quot;YourSecretName&quot;);\n\nvar keyClient = new KeyClient(vaultUri: new Uri(vaultUrl), credential: new DefaultAzureCredential());\n// Creating a new key\nKeyVaultKey key = await keyClient.GetKeyAsync(&quot;YourKeyName&quot;);\n// Encrypting and decrypting data using the key via CryptographyClient\nCryptographyClient cryptoClient = keyClient.GetCryptographyClient(key.Name, key.Properties.Version);\nEncryptResult encryptResult = cryptoClient.Encrypt(EncryptionAlgorithm.RsaOaep, Encoding.UTF8.GetBytes(plaintext));\nDecryptResult decryptResult = cryptoClient.Decrypt(EncryptionAlgorithm.RsaOaep, encryptResult.Ciphertext);</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-14",
        "title": "CLI",
        "content": "<ul>\n<li><a href=\"https://learn.microsoft.com/en-us/cli/azure/keyvault?view=azure-cli-latest#az-keyvault-set-policy\" target=\"_blank\" rel=\"noopener noreferrer\">az keyvault set-policy</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/cli/azure/keyvault/secret?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az keyvault secret</a></li>\n<li><a href=\"https://learn.microsoft.com/en-us/cli/azure/keyvault/key?view=azure-cli-latest\" target=\"_blank\" rel=\"noopener noreferrer\">az keyvault key</a></li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Entra ID",
      "Event Grid",
      "Events",
      "Graph"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/key-vault/general/security-features",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "managed-identities",
    "topic": "managed-identities",
    "title": "Azure Managed Identities",
    "description": "Enable Azure App Services-based apps to access other services without handling credentials. These identities are _Azure-exclusive_ and _can't be used with other cloud providers_ like AWS or GCP.",
    "difficulty": "Intermediate",
    "estimatedReadTime": 20,
    "tags": [
      "Managed Identities",
      "App Service",
      "Event Hub",
      "ARM",
      "cli",
      "CLI"
    ],
    "learningObjectives": [
      "Initiate Managed Identity: Request to enable (sistem assigned) or create (user assigned) managed identity via ARM.",
      "Create Service Principal: ARM sets a service principal in the trusted Entra ID tenant for the managed identity.",
      "Assign Roles & Access: Use service principal information to grant access to Azure resources via RBAC.",
      "User Access Administrator: Manages user access to resources.",
      "Management Group: All subscriptions and resources."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Enable Azure App Services-based apps to access other services without handling credentials. These identities are _Azure-exclusive_ and _can't be used with other cloud providers_ like AWS or GCP.</p>\n\n<strong>Mandatory</strong>: In Azure Portal, navigate to <code>Settings > Access policies > Add Access Policy</code> to allow your app access. Select permissions and identity name and type. Policy removal may take 24hrs due to caching.\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Property</th>\n      <th>System-assigned managed identity</th>\n      <th>User-assigned managed identity</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Creation</td>\n      <td>Created as part of an Azure resource (for example, Azure Virtual Machines or Azure App Service).</td>\n      <td>Created as a stand-alone Azure resource.</td>\n    </tr>\n    <tr>\n      <td>Life cycle</td>\n      <td>Shared life cycle with the Azure resource.<br>Deleted when the parent resource is deleted.<br>Cannot be explicitly deleted.</td>\n      <td>Independent life cycle.<br>Must be explicitly deleted.</td>\n    </tr>\n    <tr>\n      <td>Sharing across Azure resources</td>\n      <td>Can’t be shared.<br>It can only be associated with a single Azure resource.</td>\n      <td>Can be shared.<br>The same user-assigned managed identity can be associated (shared) with more than one Azure resource.</td>\n    </tr>\n    <tr>\n      <td>Common use cases</td>\n      <td>Workloads contained within a single Azure resource.<br>Workloads needing independent identities.<br>For example, an application that runs on a single virtual machine.</td>\n      <td>Workloads that run on multiple resources and can share a single identity.<br>Workloads needing pre-authorization to a secure resource, as part of a provisioning flow.<br>Workloads where resources are recycled frequently, but permissions should stay consistent.<br>For example, a workload where multiple virtual machines need to access the same resource.</td>\n    </tr>\n  </tbody>\n</table>\n\n<strong>If you have multi-tenant setup, use Application Service Principal!</strong>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-2",
        "title": "Role-based access control (Azure RBAC)",
        "content": "<p>Manage access to Azure resources. To assign Azure roles, you must have <code>Microsoft.Authorization/roleAssignments/write</code> permissions, such as <code>User Access Administrator</code> or <code>Owner</code>.</p>\n\n<p>Read access to all resources: <code>*/read</code>.</p>\n\n<p>The inheritance order for scope is Management group, Subscription, Resource group, Resource. When assigning access, follow the rule of least privilege. Note: Double check if you are granting permissions for resource or resource group!</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Using Managed Identity with a Virtual Machine",
        "content": "<ol>\n<li><strong>Initiate Managed Identity</strong>: Request to enable (sistem assigned) or create (user assigned) managed identity via ARM.</li>\n<li><strong>Create Service Principal</strong>: ARM sets a service principal in the trusted Entra ID tenant for the managed identity.</li>\n<li><strong>Configure Identity</strong>: ARM updates <a href=\"https://learn.microsoft.com/en-us/azure/virtual-machines/instance-metadata-service\" target=\"_blank\" rel=\"noopener noreferrer\">IMDS</a> (VM Specific) with the service principal client ID and certificate.</li>\n<li><strong>Assign Roles & Access</strong>: Use service principal information to grant access to Azure resources via RBAC.</li>\n<li><strong>Request Token</strong>: Code on Azure resource asks for a token from IMDS: <code><a href=\"http://169.254.169.254/metadata/identity/oauth2/token\" target=\"_blank\" rel=\"noopener noreferrer\">http://169.254.169.254/metadata/identity/oauth2/token</a></code></li>\n<li><strong>Retrieve Token</strong>: By using the configured client ID and certificate, Entra ID returns a JWT access token upon request.</li>\n<li><strong>Use Token</strong>: Code uses the token to authenticate with Entra ID-supported services.</li>\n</ol>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Managing Identities",
        "content": "<ol>\n<li><strong>System-assigned Identity</strong></li>\n</ol>\n\n<p><pre><code class=\"language-sh\"># Creating a resource (like a VM or any other service that supports it) with a system-assigned identity\n   az &lt;service&gt; create --resource-group $resourceGroup --name myResource --assign-identity &#39;[system]&#39;\n\n# Assigning a system-assigned identity to an existing resource\n   az &lt;service&gt; identity assign --resource-group $resourceGroup --name myResource --identities &#39;[system]&#39;</code></pre></p>\n<ol>\n<li><strong>User-assigned Identity</strong></li>\n</ol>\n\n<p><pre><code class=\"language-sh\"># First, create the identity\n   az identity create --resource-group $resourceGroup --name identityName\n\n# Creating a resource (like a VM or any other service that supports it) with a user-assigned identity\n   az &lt;service&gt; create --assign-identity $identityName --resource-group $resourceGroup --name $resourceName\n#az &lt;service&gt; create --assign-identity &#39;/subscriptions/&lt;SubId&gt;/resourcegroups/$resourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity&#39; --resource-group $resourceGroup --name $resourceName\n\n# Assigning a user-assigned identity to an existing resource\n   az &lt;service&gt; identity assign --identities $identityName --resource-group $resourceGroup --name $resourceName\n# az &lt;service&gt; identity assign --identities &#39;/subscriptions/&lt;SubId&gt;/resourcegroups/$resourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity&#39; --resource-group $resourceGroup --name $resourceName</code></pre></p>\n<p>Both system-assigned and user-assigned managed identities can be assigned specific Azure roles, allowing them to perform certain actions on specific Azure resources. These roles are part of Azure's Role-Based Access Control (<a href=\"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview\" target=\"_blank\" rel=\"noopener noreferrer\">RBAC</a>) system, which provides fine-grained access management to Azure resources.</p>\n<p><pre><code class=\"language-sh\">az role assignment create --assignee &lt;PrincipalId&gt; --role &lt;RoleName&gt; --scope &lt;Scope&gt;</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Azure Access Control",
        "content": "<ul>\n<li><a href=\"https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Roles</strong></a>: Define what actions you can perform.</li>\n<li><strong>Owner</strong>: Full access, including role assignment.</li>\n<li><strong>Contributor</strong>: Full access, no role assignment.</li>\n<li><strong>Reader</strong>: View-only.</li>\n<li><strong>User Access Administrator</strong>: Manages user access to resources.</li>\n<li><a href=\"https://docs.microsoft.com/en-us/azure/role-based-access-control/scope-overview\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Scopes</strong></a>: Define where actions apply.</li>\n<li><strong>Management Group</strong>: All subscriptions and resources.</li>\n<li><strong>Subscription</strong>: All resources in subscription.</li>\n<li><strong>Resource Group</strong>: All resources in group.</li>\n<li><strong>Resource</strong>: Specific resource only.</li>\n</ul>\n\n<a href=\"https://docs.microsoft.com/en-us/azure/role-based-access-control/deny-assignments\" target=\"_blank\" rel=\"noopener noreferrer\">Deny assignments</a> <strong>override role assignments</strong> to block specific actions.",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Hierarchy for managing a resource (from least to highest permission levels)",
        "content": "<ul>\n<li>No role: Users or managed identities are granted only permissions they need, like read or write, without using a predefined role.</li>\n<li>Resource <code>Reader</code></li>\n<li>Resource <code>Contributor</code></li>\n<li>Resource <code>Owner</code></li>\n<li>Resource <code>Administrator</code></li>\n<li>Global Administrator</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Acquiring an Access Token with Azure Managed Identities",
        "content": "<strong>DefaultAzureCredential</strong>: This class attempts multiple methods of authentication based on the available environment or sign-in details, stopping once it's successful. It checks the following sources in order:\n\n<ol>\n<li>Environment variables (<a href=\"https://learn.microsoft.com/en-us/dotnet/api/azure.identity.environmentcredential?view=azure-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><code>EnvironmentCredential</code></a>) - <code>AZURE_TENANT_ID</code>, <code>AZURE_CLIENT_ID</code>, in addition to:</li>\n</ol>\n<ul>\n<li>Service principle with secret (<a href=\"https://learn.microsoft.com/en-us/dotnet/api/azure.identity.clientsecretcredential?view=azure-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><code>ClientSecretCredential</code></a>): <code>AZURE_CLIENT_SECRET</code></li>\n<li>Service principal with certificate (<a href=\"https://learn.microsoft.com/en-us/dotnet/api/azure.identity.clientcertificatecredential?view=azure-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><code>ClientCertificateCredential</code></a>): <code>AZURE_CLIENT_SECRET</code>, <code>AZURE_CLIENT_CERTIFICATE_PATH</code>, <code>AZURE_CLIENT_CERTIFICATE_PASSWORD</code>, <code>AZURE_CLIENT_SEND_CERTIFICATE_CHAIN</code></li>\n<li>Username and password (<a href=\"https://learn.microsoft.com/en-us/dotnet/api/azure.identity.usernamepasswordcredential?view=azure-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><code>UsernamePasswordCredential</code></a>): <code>AZURE_USERNAME</code>, <code>AZURE_PASSWORD</code></li>\n</ul>\n<ol>\n<li>Managed Identity if the application is deployed on an Azure host with this feature enabled.</li>\n</ol>\n\n<p><pre><code class=\"language-cs\">new ManagedIdentityCredential(); // system-assigned\n   new ManagedIdentityCredential(clientId: userAssignedClientId); // user-assigned\n   new DefaultAzureCredential(new DefaultAzureCredentialOptions { ManagedIdentityClientId = userAssignedClientId }); // user-assigned</code></pre></p>\n<ol>\n<li>Visual Studio if the developer has authenticated through it.</li>\n<li>Azure CLI (<code>AzureCliCredential</code>) if the developer has authenticated through <code>az login</code> command.</li>\n<li>Azure PowerShell if the developer has authenticated via the <code>Connect-AzAccount</code> command.</li>\n<li>Interactive browser, though this option is disabled by default.</li>\n</ol>\n\n<p><pre><code class=\"language-cs\">new InteractiveBrowserCredential();\n   new DefaultAzureCredential(includeInteractiveCredentials: true);</code></pre></p>\n<strong>ChainedTokenCredential</strong>: Enables users to combine multiple credential instances to define a customized chain of credentials.\n<p><pre><code class=\"language-csharp\">// authenticate using managed identity, and fall back to authenticating via the Azure CLI if managed identity is unavailable in the current environment\nvar credential = new ChainedTokenCredential(new ManagedIdentityCredential(), new AzureCliCredential());</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Logging",
        "content": "<p><pre><code class=\"language-cs\">// Ensure AzureEventSourceListener is in scope and active while using the client library for log collection.\n// Create it as a top-level member of the class using the Event Hubs client.\nusing AzureEventSourceListener listener = AzureEventSourceListener.CreateConsoleLogger();\n\nDefaultAzureCredentialOptions options = new DefaultAzureCredentialOptions\n{\n    Diagnostics =\n    {\n        LoggedHeaderNames = { &quot;x-ms-request-id&quot; },\n        LoggedQueryParameters = { &quot;api-version&quot; },\n        IsAccountIdentifierLoggingEnabled = true, // enable logging of sensitive information\n        IsLoggingContentEnabled = true // log details about the account that was used to attempt authentication and authorization\n    }\n};</code></pre></p>\n<p>Exceptions: Service client methods raise <code>AuthenticationFailedException</code> for token issues.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Token caching",
        "content": "<p>Tokens can be stored in _memory_ (default) or on _disk_ (opt-in). Use <code>TokenCachePersistenceOptions()</code> for default cache, specify a <code>Name</code> for isolated cache, and <code>UnsafeAllowUnencryptedStorage</code> for unencrypted storage. Different credentials support different caching types - CLI: None, Default and Managed - only cache, rest: both.</p>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "App Service",
      "Azure Portal",
      "Entra ID",
      "Event Hub"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "message-queues",
    "topic": "message-queues",
    "title": "Message Queues",
    "description": "Comprehensive guide to Message Queues in Microsoft Azure platform",
    "difficulty": "Intermediate",
    "estimatedReadTime": 4,
    "tags": [
      "Message Queues",
      "Service Bus",
      "Event Hub",
      "Queue Storage",
      "API",
      "cli"
    ],
    "learningObjectives": [
      "Large Message Storage: Suitable for storing over 80 gigabytes of messages in a queue.",
      "Progress Tracking: Useful for tracking progress for processing a message, especially if a worker crashes.",
      "Server-Side Logs: If you require server-side logs of all transactions executed against your queues."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Storage Queues",
        "content": "<ul>\n<li><strong>Large Message Storage</strong>: Suitable for storing over 80 gigabytes of messages in a queue.</li>\n<li><strong>Progress Tracking</strong>: Useful for tracking progress for processing a message, especially if a worker crashes.</li>\n<li><strong>Server-Side Logs</strong>: If you require server-side logs of all transactions executed against your queues.</li>\n<li><strong>Large Queue Size</strong>: If you need queues that can be larger than 80 GB in size.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Service Bus Queues",
        "content": "<ul>\n<li><strong>Real-Time Messaging</strong>: When your solution needs to receive messages without polling the queue.</li>\n<li><strong>Ordered Delivery</strong>: If your solution requires guaranteed first-in-first-out (FIFO) ordered delivery.</li>\n<li><strong>Duplicate Detection</strong>: When you want automatic duplicate detection.</li>\n<li><strong>Transactional Behavior</strong>: If your solution requires transactional behavior and atomicity when sending or receiving multiple messages.</li>\n<li><strong>Role-Based Access</strong>: If you need a role-based access model to the queues with different rights/permissions for senders and receivers.</li>\n<li><strong>Processing Messages as Parallel Long-Running Streams</strong>: When your application processes messages as parallel streams using the <strong>session ID</strong>, allowing consuming nodes to compete for streams and examine the application stream state with transactions.</li>\n<li><strong>Larger message size</strong>: 64-256KB.</li>\n<li><strong>Advanced Features</strong>: If you're building a hybrid application or require advanced features like sessions, transactions, duplicate detection, automatic dead-lettering, and durable publish and subscribe capabilities.</li>\n</ul>\n\n<p>Storage Queues are generally more suitable for basic communication and large storage needs, while Service Bus Queues offer more advanced features and real-time capabilities.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Comparison",
        "content": "<p>Azure Service Bus supports \"Receive and Delete\" mode, where messages are immediately consumed and removed from the queue.</p>\n<p>Messages in Event Hubs are retained for a configured retention period, and consumers are responsible for tracking their position in the stream.</p>\n<p>In Queue Storage messages are hidden for a specified visibility timeout period, and if not deleted within that time, they become visible again.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Foundational Capabilities",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Comparison Criteria</th>\n      <th>Storage Queues</th>\n      <th>Service Bus Queues</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Ordering guarantee</td>\n      <td>No</td>\n      <td>FIFO (by using message sessions)</td>\n    </tr>\n    <tr>\n      <td>Atomic operation support</td>\n      <td>No</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Receive behavior</td>\n      <td>Non-blocking (completes immediately if no new message is found)</td>\n      <td>Blocking with or without a timeout (offers long polling) / Non-blocking</td>\n    </tr>\n    <tr>\n      <td>Push-style API</td>\n      <td>No</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Receive mode</td>\n      <td>Peek & Lease</td>\n      <td>Peek & Lock / Receive & Delete</td>\n    </tr>\n    <tr>\n      <td>Exclusive access mode</td>\n      <td>Lease-based</td>\n      <td>Lock-based</td>\n    </tr>\n    <tr>\n      <td>Lease/Lock duration</td>\n      <td>30 seconds (default) / 7 days (maximum)</td>\n      <td>30 seconds (default)</td>\n    </tr>\n    <tr>\n      <td>Lease/Lock precision</td>\n      <td>Message level</td>\n      <td>Queue level</td>\n    </tr>\n    <tr>\n      <td>Batched receive</td>\n      <td>Yes (up to 32 messages)</td>\n      <td>Yes (implicitly enabling a pre-fetch property or explicitly by using transactions)</td>\n    </tr>\n    <tr>\n      <td>Batched send</td>\n      <td>No</td>\n      <td>Yes (by using transactions or client-side batching)</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Advanced Capabilities",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Comparison Criteria</th>\n      <th>Storage Queues</th>\n      <th>Service Bus Queues</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Automatic dead lettering</td>\n      <td>No</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Server-side transaction log</td>\n      <td>Yes</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>State management</td>\n      <td>No</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Message autoforwarding</td>\n      <td>No</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Purge queue function</td>\n      <td>Yes</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>Message groups</td>\n      <td>No</td>\n      <td>Yes (by using messaging sessions)</td>\n    </tr>\n    <tr>\n      <td>Duplicate detection</td>\n      <td>No</td>\n      <td>Yes</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Capacity and Quotas",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Comparison Criteria</th>\n      <th>Storage Queues</th>\n      <th>Service Bus Queues</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Maximum queue size</td>\n      <td>500 TB (limited to a single storage account capacity)</td>\n      <td>1 GB to 80 GB (defined upon creation of a queue and enabling partitioning)</td>\n    </tr>\n    <tr>\n      <td>Maximum message size</td>\n      <td>64 KB (48 KB when using Base64 encoding)</td>\n      <td>256 KB or 100 MB (depends on the service tier)</td>\n    </tr>\n    <tr>\n      <td>Maximum number of queues</td>\n      <td>Unlimited</td>\n      <td>10,000 (per service namespace)</td>\n    </tr>\n    <tr>\n      <td>Maximum number of concurrent clients</td>\n      <td>Unlimited</td>\n      <td>5,000</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Management and Operations",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Comparison Criteria</th>\n      <th>Storage Queues</th>\n      <th>Service Bus Queues</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Management protocol</td>\n      <td>REST over HTTP/HTTPS</td>\n      <td>REST over HTTPS</td>\n    </tr>\n    <tr>\n      <td>Runtime protocol</td>\n      <td>REST over HTTP/HTTPS</td>\n      <td>REST over HTTPS / AMQP 1.0 Standard (TCP with TLS)</td>\n    </tr>\n    <tr>\n      <td>Arbitrary metadata support</td>\n      <td>Yes</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>Queue naming rules</td>\n      <td>Up to 63 characters long (Letters must be lowercase)</td>\n      <td>Up to 260 characters long (case-insensitive)</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "Event Hub",
      "Queue Storage",
      "Service Bus"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "queue-storage",
    "topic": "queue-storage",
    "title": "Azure Queue Storage",
    "description": "Endpoint: https://queue.core.windows.net - May contain millions of messages, up to the total capacity limit of a storage account. - Commonly used to create a backlog of work to process asynchronous...",
    "difficulty": "Intermediate",
    "estimatedReadTime": 6,
    "tags": [
      "Queue Storage",
      "cli",
      "Cli",
      "Storage",
      "storage"
    ],
    "learningObjectives": [
      "May contain millions of messages, up to the total capacity limit of a storage account.",
      "Commonly used to create a backlog of work to process asynchronously.",
      "Max size: 64KB"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Understanding of data storage and database concepts",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Endpoint: <code><a href=\"https://queue.core.windows.net\" target=\"_blank\" rel=\"noopener noreferrer\">https://queue.core.windows.net</a></code></p>\n\n<ul>\n<li>May contain millions of messages, up to the total capacity limit of a storage account.</li>\n<li>Commonly used to create a backlog of work to process asynchronously.</li>\n<li>Max size: 64KB</li>\n<li>TTL: 7 days (⏺️), -1 to never expire.</li>\n<li>Applications can scale indefinitely to meet demand.</li>\n</ul>\n\n<ul>\n<li><a href=\"https://www.nuget.org/packages/azure.core/\" target=\"_blank\" rel=\"noopener noreferrer\">Azure.Core library for .NET</a>: Shared primitives, abstractions</li>\n<li><a href=\"https://www.nuget.org/packages/azure.storage.common/\" target=\"_blank\" rel=\"noopener noreferrer\">Azure.Storage.Common client library for .NET</a>: Infrastructure shared by the other Azure Storage client libraries.</li>\n<li><a href=\"https://www.nuget.org/packages/azure.storage.queues/\" target=\"_blank\" rel=\"noopener noreferrer\">Azure.Storage.Queues client library for .NET</a>: Working with Azure Queue Storage.</li>\n<li><a href=\"https://www.nuget.org/packages/system.configuration.configurationmanager/\" target=\"_blank\" rel=\"noopener noreferrer\">System.Configuration.ConfigurationManager library for .NET</a>: Configuration files for client applications.</li>\n</ul>\n<p><pre><code class=\"language-cs\">// Get the connection string from app settings\n// Example: DefaultEndpointsProtocol=https;AccountName={your_account_name};AccountKey={your_account_key};EndpointSuffix={endpoint_suffix}\nstring connectionString = ConfigurationManager.AppSettings[&quot;StorageConnectionString&quot;];\n\n// Instantiate a QueueClient which will be used to create and manipulate the queue\nQueueClient queueClient = new QueueClient(connectionString, queueName);\n\n// Create the queue if it doesn&#39;t already exist\nawait queueClient.CreateIfNotExistsAsync();\n\nif (await queueClient.ExistsAsync())\n{\n    await queueClient.SendMessageAsync(&quot;message&quot;);\n\n    // Peek at the next message\n    // If you don&#39;t pass a value for the `maxMessages` parameter, the default is to peek at one message.\n    PeekedMessage[] peekedMessage = await queueClient.PeekMessagesAsync();\n\n    // Change the contents of a message in-place\n    // This code saves the work state and grants the client an extra minute to continue their message (default is 30 sec).\n    QueueMessage[] message = await queueClient.ReceiveMessagesAsync();\n    // PopReceipt must be provided when performing operations to the message\n    // in order to prove that the client has the right to do so when locked\n    queueClient.UpdateMessage(message[0].MessageId,\n            message[0].PopReceipt,\n            &quot;Updated contents&quot;,\n            TimeSpan.FromSeconds(60.0)  // Make it invisible for another 60 seconds\n        );\n\n    // Dequeue the next message\n    QueueMessage[] retrievedMessage = await queueClient.ReceiveMessagesAsync();\n    Console.WriteLine(__CODEBLOCK_0__quot;Dequeued message: &#39;{retrievedMessage[0].Body}&#39;&quot;);\n    await queueClient.DeleteMessageAsync(retrievedMessage[0].MessageId, retrievedMessage[0].PopReceipt);\n\n    // Get the queue length\n    QueueProperties properties = await queueClient.GetPropertiesAsync();\n    int cachedMessagesCount = properties.ApproximateMessagesCount; // &gt;= of actual messages count\n    Console.WriteLine(__CODEBLOCK_0__quot;Number of messages in queue: {cachedMessagesCount}&quot;);\n\n    // Delete the queue\n    await queueClient.DeleteAsync();\n}</code></pre></p>\n<p><pre><code class=\"language-sh\">az storage account create --name mystorageaccount --resource-group $resourceGroup --location eastus --sku Standard_LRS\naz storage queue create --name myqueue --account-name mystorageaccount\naz storage queue list --account-name mystorageaccount --output table\naz storage message put --queue-name myqueue --account-name mystorageaccount --content &quot;Hello, World!&quot;\naz storage message peek --queue-name myqueue --account-name mystorageaccount\naz storage message get --queue-name myqueue --account-name mystorageaccount\naz storage message delete --queue-name myqueue --account-name mystorageaccount --message-id &lt;message-id&gt; --pop-receipt &lt;pop-receipt&gt;\naz storage queue delete --name myqueue --account-name mystorageaccount</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      }
    ],
    "relatedTopics": [
      "Message Queues"
    ],
    "officialDocs": "https://docs.microsoft.com/en-us/azure/storage/queues/",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "resource-group",
    "topic": "resource-group",
    "title": "Resource group",
    "description": "Resource group is a logical container into which Azure resources (web apps, databases, storage aacounts) are deployed and managed. Required by all services/resources to be created.",
    "difficulty": "Intermediate",
    "estimatedReadTime": 5,
    "tags": [
      "Resource group",
      "App service",
      "API",
      "arm",
      "database",
      "storage"
    ],
    "learningObjectives": [
      "`Microsoft.Web/sites`: Web app",
      "`Microsoft.Web/serverfarms`: App service plan"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Resource group is a logical container into which Azure resources (web apps, databases, storage aacounts) are deployed and managed.</p>\n\n<strong>Required</strong> by all services/resources to be created.\n<p>Updating resource requires resource group to be passed (unless resource name is unique).</p>\n\n<p>API: <a href=\"https://learn.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-create\" target=\"_blank\" rel=\"noopener noreferrer\">az group create</a> | <a href=\"https://learn.microsoft.com/en-us/powershell/module/az.resources/new-azresourcegroup\" target=\"_blank\" rel=\"noopener noreferrer\">New-AzResourceGroup</a></p>\n<p><pre><code class=\"language-sh\">az group create\n    --name\n    --location</code></pre></p>\n<p>Move to different resource group / subscription:</p>\n<p><pre><code class=\"language-sh\">$res1=$(az resource show -g OldRG -n res1Name --resource-type &quot;&lt;type&gt;&quot; --query id --output tsv)\n# res2=... another related resource\naz resource move --destination-group NewRG --ids $res1 # res2 res3 ...\n# Add `--destination-subscription-id $newSubscription` to change subsription</code></pre></p>\n<ul>\n<li><code>Microsoft.Web/sites</code>: Web app</li>\n<li><code>Microsoft.Web/serverfarms</code>: App service plan</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      }
    ],
    "relatedTopics": [
      "App Service"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "service-bus",
    "topic": "service-bus",
    "title": "Azure Service Bus",
    "description": "Endpoint: https://servicebus.azure.net",
    "difficulty": "Beginner",
    "estimatedReadTime": 14,
    "tags": [
      "Service Bus",
      "Cli",
      "REST",
      "API",
      "cli",
      "SDK"
    ],
    "learningObjectives": [
      "Decoupling: Client and service don't have to be online at the same time.",
      "[Receive modes](https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement):",
      "Receive and delete: Messages are immediately consumed and removed."
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>Supports AMQP 1.0, enabling applications to work with Service Bus, and on-premises brokers like ActiveMQ or RabbitMQ.</p>\n\n<p>Up to 80 GB only.</p>\n\n<ul>\n<li><strong>Queue</strong>: Only one consumer receives and processes each message at a time (_point-to-point_ connection), and since messages are stored durably in the queue, producers and consumers don't need to handle messages concurrently.</li>\n<li><strong>Load-leveling</strong>: Effectively buffering against fluctuating system loads, ensuring the system is optimized to manage the average load, instead of peaks.</li>\n<li><strong>Decoupling</strong>: Client and service don't have to be online at the same time.</li>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Receive modes</strong></a>:</li>\n<li><strong>Receive and delete</strong>: Messages are immediately consumed and removed.</li>\n<li><strong>Peek lock</strong>: Messages are locked for processing, and the application must explicitly complete the processing to mark the message as consumed. If the application fails, the message can be abandoned or automatically unlocked after a timeout (1min default).</li>\n<li><strong>Topics:</strong> Publishers send messages to a topic (1:n), and each message is distributed to all subscriptions registered with the topic.</li>\n<li><strong>Subscriptions:</strong> Subscribers receive message copies from the topic, based on filter rules set on their subscriptions. Subscriptions act like virtual queues and can apply filters to receive specific messages.</li>\n<li><strong>Rules and actions</strong>: You can configure subscriptions to process messages with specific characteristics differently. This is done using <strong>filter actions</strong>. When a subscription is created, you can define a filter expression that operates on message properties - system (ex. <code>\"Label\"</code>) or custom (ex: <code>\"StoreName\"</code>). This expression allows you to copy only the desired subset of messages to the virtual subscription queue. If no SQL filter expression is provided, the filter action applies to all messages in that subscription.</li>\n</ul>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Premium</th>\n      <th>Standard</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>High throughput</td>\n      <td>Variable throughput</td>\n    </tr>\n    <tr>\n      <td>Predictable performance</td>\n      <td>Variable latency</td>\n    </tr>\n    <tr>\n      <td>Fixed pricing</td>\n      <td>Pay as you go variable pricing</td>\n    </tr>\n    <tr>\n      <td>Ability to scale workload up and down</td>\n      <td>N/A</td>\n    </tr>\n    <tr>\n      <td>Message size up to 100 MB</td>\n      <td>Message size up to 256 KB</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-2",
        "title": "Components",
        "content": "<ul>\n<li><strong>Namespace</strong>: A container for all messaging components.</li>\n<li><strong>Queues</strong> (point-to-point communication): Send and receive messages from.</li>\n</ul>\n<p>Multiple queues and topics are supported in a single namespace, and namespaces often serve as application containers.</p>\n<ul>\n<li><strong>Topics</strong>: Also allow you to send and receive messages and mainly used in publish/subscribe scenarios. It contains multiple independent subscriptions called entities.</li>\n</ul>\n<p>To filter specific messages, you can use rules and filters to define conditions that trigger optional actions.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-3",
        "title": "Payload and serialization",
        "content": "<p>In the form of key-value pairs. The payload is always an opaque _binary block_ when stored or in transit. Its format can be described using the <code>ContentType</code> property. Applications are advised to manage object serialization themselves.</p>\n\n<p>The AMQP protocol serializes objects into an AMQP object, retrievable by the receiver using <code>GetBody<T>()</code>. Objects are serialized into an AMQP graph of <code>ArrayList</code> and <code>IDictionary<string,object></code>.</p>\n\n<p>Each message has two sets of properties: _system-defined broker properties_, and _user-defined properties_.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-4",
        "title": "Message Routing and Correlation",
        "content": "<p>Broker properties like <code>To</code>, <code>ReplyTo</code>, <code>ReplyToSessionId</code>, <code>MessageId</code>, <code>CorrelationId</code>, and <code>SessionId</code> assist in message routing. The routing patterns are:</p>\n\n<ul>\n<li><strong>Simple request/reply</strong>: Publishers send messages and await replies in a queue. Replies are addressed using <code>ReplyTo</code> and correlated with <code>MessageId</code>. Multiple replies are possible.</li>\n<li><strong>Multicast request/reply</strong>: Similar to the simple pattern, but messages are sent to a topic, and multiple subscribers can respond. Responses can be distributed if <code>ReplyTo</code> points to a topic.</li>\n<li><strong>Multiplexing</strong>: Streams of related messages are directed through one queue or subscription using matching <code>SessionId</code> values.</li>\n<li><strong>Multiplexed request/reply</strong>: Multiple publishers share a reply queue, and replies are guided by <code>ReplyToSessionId</code> and <code>SessionId</code>.</li>\n</ul>\n\n<p>Routing is managed internally, but applications can also use user properties for routing, as long as they don't use the reserved <code>To</code> property.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Advanced features",
        "content": "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Feature</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Message sessions</td>\n      <td>Enables FIFO guaranteed handling of related messages sequence.</td>\n    </tr>\n    <tr>\n      <td>Parallel Stream Processing</td>\n      <td>Can process messages as parallel, long-running streams using <strong>session ID</strong></td>\n    </tr>\n    <tr>\n      <td>Autoforwarding</td>\n      <td>Removes messages from a queue or subscription and transfer it to a different queue or topic within the same namespace.</td>\n    </tr>\n    <tr>\n      <td>Dead-letter queue</td>\n      <td>Holds messages that can't be delivered, allows for removal and inspection.</td>\n    </tr>\n    <tr>\n      <td>Scheduled delivery</td>\n      <td>Allows delayed processing by scheduling a message for a certain time.</td>\n    </tr>\n    <tr>\n      <td>Message deferral</td>\n      <td>Defers message retrieval until a later time, message remains set aside.</td>\n    </tr>\n    <tr>\n      <td>Batching</td>\n      <td>Delays sending a message for a certain period.</td>\n    </tr>\n    <tr>\n      <td>Transactions</td>\n      <td>Groups operations into an execution scope for a single messaging entity.</td>\n    </tr>\n    <tr>\n      <td>Autodelete on idle</td>\n      <td>Automatically deletes a queue after a specified idle interval. Minimum duration is 5 minutes.</td>\n    </tr>\n    <tr>\n      <td>Duplicate detection</td>\n      <td>Resends same message or discards any duplicate copies in case of send operation doubt.</td>\n    </tr>\n    <tr>\n      <td>Security protocols</td>\n      <td>Supports protocols like SAS, RBAC, and Managed identities for Azure.</td>\n    </tr>\n    <tr>\n      <td>Geo-disaster recovery</td>\n      <td>Continues data processing in a different region or datacenter during downtime.</td>\n    </tr>\n    <tr>\n      <td>Security</td>\n      <td>Supports standard AMQP 1.0 and HTTP/REST protocols.</td>\n    </tr>\n  </tbody>\n</table>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-6",
        "title": "Messege expiration (TTL)",
        "content": "<ul>\n<li><strong>Setting TTL</strong>: Message-level TTL <strong>cannot be higher than topic's (queue) TTL</strong>. If not set, queue's TTL is used.</li>\n<li><strong>Message Lock</strong>: When a message is locked, its expiration is halted. Expiration resumes if the lock expires or the message is abandoned.</li>\n<li><strong>Dead-Letter Queue</strong>: Expired messages can be moved to a dead-letter queue for further inspection.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-7",
        "title": "Scheduled messages",
        "content": "<p>To schedule messages, you have two options:</p>\n\n<ol>\n<li>Use the regular API and set the <code>ScheduledEnqueueTimeUtc</code> property before sending.</li>\n<li>Use the schedule API, provide the message and time, and get a <code>SequenceNumber</code> for possible cancellation later.</li>\n</ol>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-8",
        "title": "Best Practices for performance improvements",
        "content": "<ul>\n<li>Always prefer asynchronous methods to improve performance and responsiveness.</li>\n<li>Message factories: Use multiple message factories to enhance throughput, particularly when both sides have a large number of senders and receivers. Opt for a single message factory per process when one side has significantly fewer senders or receivers.</li>\n<li>Batched store access (batching): Increases throughput. Consider disabling for low-latency requirements.</li>\n<li>Prefetch count: Set to 20 times the maximum processing rates of all receivers. Use a smaller prefetch count when dealing with a large number of receivers to balance resource utilization and responsiveness. For low-latency with a single client, set to 20 times the processing rate of the receiver. With multiple clients, set to 0.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-9",
        "title": "Security",
        "content": "<p>RBAC:</p>\n\n<ul>\n<li>Azure Service Bus Data Owner</li>\n<li>Azure Service Bus Data Sender</li>\n<li>Azure Service Bus Data Receiver</li>\n</ul>\n\n<p>Also supports SAS and Managed Identities</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-10",
        "title": "Filters",
        "content": "<ul>\n<li><strong>SQL Filters</strong> (<code>SqlRuleFilter</code>):</li>\n</ul>\n\n<ul>\n<li><strong>Use</strong>: Complex conditions using SQL-like expressions. All system properties must be prefixed with <code>sys.</code> in the conditional expression. (IS NULL, EXISTS, LIKE, AND/OR/NOT).</li>\n<li><strong>Example</strong>: Filtering messages having specific property value (or not) and quantities.</li>\n<li><strong>Impact</strong>: Lower throughput compared to Correlation Filters.</li>\n</ul>\n\n<ul>\n<li><strong>Boolean Filters</strong> (<code>TrueRuleFilter</code> and <code>FalseRuleFilter</code>):</li>\n</ul>\n\n<ul>\n<li><strong>Use</strong>: Select all (TrueFilter) or none (FalseFilter) of the messages.</li>\n<li><strong>Example</strong>: <code>new TrueRuleFilter()</code> for all messages.</li>\n</ul>\n\n<ul>\n<li><strong>Correlation Filters</strong> (<code>CorrelationRuleFilter</code>):</li>\n<li><strong>Use</strong>: Match messages based on specific properties like CorrelationId, ContentType, Label, MessageId, ReplyTo, ReplyToSessionId, SessionId, To, any user-defined properties.</li>\n<li><strong>Example</strong>: Filtering messages with a specific subject and correlation ID.</li>\n<li><strong>Impact</strong>: More efficient in processing, preferred over SQL filters.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-11",
        "title": "Actions",
        "content": "<ul>\n<li><strong>Use</strong>: Modify message properties after matching and before selection.</li>\n<li><strong>Example</strong>: Setting a new quantity value if property matches a value (or not).</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-12",
        "title": "Usage Patterns",
        "content": "<ul>\n<li><strong>Broadcast Pattern</strong>: Every subscription gets a copy of each message.</li>\n<li><strong>Partitioning Pattern</strong>: Distributes messages across subscriptions in a mutually exclusive manner.</li>\n<li><strong>Routing Pattern</strong>: When you need to route messages based on their content or some attributes.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-13",
        "title": "Azure Service Bus for .NET",
        "content": "<p><pre><code class=\"language-cs\">using Azure.Messaging.ServiceBus;\n\nstring queueName = &quot;az204-queue&quot;;\n\nServiceBusClient GetClient()\n{\n    return new ServiceBusClient(connectionString);\n\n    // Alternatives\n\n    var serviceBusEndpoint = new Uri(__CODEBLOCK_0__quot;sb://{serviceBusNamespace}.servicebus.windows.net/&quot;);\n\n    // SAS\n    return new ServiceBusClient(serviceBusEndpoint, new AzureNamedKeyCredential(sharedAccessKeyName, sharedAccessKey));\n\n    // Managed identity\n    return new ServiceBusClient(serviceBusEndpoint, new DefaultAzureCredential());\n}\n\nawait using (var client = GetClient())\n{\n    await using (sender = client.CreateSender(queueName))\n    using (ServiceBusMessageBatch messageBatch = await sender.CreateMessageBatchAsync())\n    {\n        for (int i = 1; i &lt;= 3; i++)\n            if (!messageBatch.TryAddMessage(new ServiceBusMessage(__CODEBLOCK_0__quot;Message {i}&quot;)))\n                throw new Exception(__CODEBLOCK_0__quot;Exception {i} has occurred.&quot;);\n        await sender.SendMessagesAsync(messageBatch);\n        Console.WriteLine(__CODEBLOCK_0__quot;A batch of three messages has been published to the queue.&quot;);\n\n        sender.SendMessagesAsync(new ServiceBusMessage(__CODEBLOCK_0__quot;Messages complete&quot;));\n    }\n\n    using (var processor = client.CreateProcessor(queueName, new ServiceBusProcessorOptions()))\n    {\n        processor.ProcessMessageAsync += MessageHandler;\n        processor.ProcessErrorAsync += ErrorHandler;\n        await processor.StartProcessingAsync();\n\n        Console.WriteLine(&quot;Wait for a minute and then press any key to end the processing&quot;);\n        Console.ReadKey();\n\n        Console.WriteLine(&quot;\\nStopping the receiver...&quot;);\n        await processor.StopProcessingAsync();\n        Console.WriteLine(&quot;Stopped receiving messages&quot;);\n    }\n}\n\nasync Task MessageHandler(ProcessMessageEventArgs args)\n{\n    string body = args.Message.Body.ToString();\n    Console.WriteLine(__CODEBLOCK_0__quot;Received: {body}&quot;);\n    await args.CompleteMessageAsync(args.Message);\n}\n\nTask ErrorHandler(ProcessErrorEventArgs args)\n{\n    Console.WriteLine(args.Exception.ToString());\n    return Task.CompletedTask;\n}</code></pre></p>\n<p><pre><code class=\"language-sh\">az servicebus namespace create --name mynamespace --resource-group $resourceGroup --location eastus\naz servicebus queue create --name myqueue --namespace-name mynamespace --resource-group $resourceGroup\n\naz servicebus queue list --namespace-name mynamespace --resource-group $resourceGroup\n\naz servicebus namespace authorization-rule keys list --name RootManageSharedAccessKey --namespace-name mynamespace --resource-group $resourceGroup --query primaryConnectionString\n\n# Send, Peek, Delete - You would use an SDK or other tooling\n\naz servicebus queue delete --name myqueue --namespace-name mynamespace --resource-group $resourceGroup\naz servicebus namespace delete --name mynamespace --resource-group $resourceGroup</code></pre></p>\n<p><pre><code class=\"language-ps\">New-AzServiceBusNamespace -ResourceGroupName $resourceGroup -Name myNamespace -SkuName Premium -Location northeurope -IdentityType UserAssigned</code></pre></p>",
        "type": "content",
        "estimatedReadTime": 2
      }
    ],
    "relatedTopics": [
      "App Service",
      "Containers",
      "Graph",
      "Managed Identities"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  },
  {
    "id": "shared-access-signatures",
    "topic": "shared-access-signatures",
    "title": "Shared Access Signatures (SAS)",
    "description": "A Shared Access Signature (SAS) is a URI that grants restricted access rights to Azure Storage resources. It's a signed URI that points to one or more storage resources and includes a token that co...",
    "difficulty": "Intermediate",
    "estimatedReadTime": 18,
    "tags": [
      "Shared Access Signatures (SAS)",
      "rest",
      "cli",
      "API",
      "Cli",
      "authentication"
    ],
    "learningObjectives": [
      "Ad hoc SAS: Defines start, expiry, and permissions in the SAS URI. Any SAS can be an ad hoc SAS.",
      "Service SAS: Uses a stored policy on resources to inherit start, expiry, and permissions.",
      "URI: `https://<account>.blob.core.windows.net/<container>/<blob>?`"
    ],
    "prerequisites": [
      "Basic understanding of cloud computing concepts",
      "Familiarity with Azure portal and Azure services",
      "Command line interface experience"
    ],
    "sections": [
      {
        "id": "section-1",
        "title": "Overview",
        "content": "<p>A Shared Access Signature (SAS) is a URI that grants restricted access rights to Azure Storage resources. It's a signed URI that points to one or more storage resources and includes a token that contains a special set of query parameters.</p>\n\n<p>Use a SAS for secure, temporary access to your storage account, especially when users need to read/write their own data or for copying data within Azure Storage.</p>\n\n<p>Note: You should prefer Entra ID</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-2",
        "title": "Types of SAS",
        "content": "<ol>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>User Delegation SAS</strong></a>: This method uses Microsoft Entra ID credentials to create a SAS. It's a secure way to grant limited access to your Azure Storage resources without sharing your account key. It's recommended when you want to provide fine-grained access control to clients who are authenticated with Entra ID. The account _must have_ <code>generateUserDelegationKey</code> permission, or <code>Contributor</code> role.</li>\n</ol>\n\n<ol>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/storage/blobs/sas-service-create-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Service SAS</strong></a>: This method uses your storage account key to create a SAS. It's a straightforward way to grant limited access to your Azure Storage resources. However, it's less secure than the User Delegation SAS because it involves sharing your account key. It's typically used when you want to provide access to clients who are not authenticated with Entra ID.</li>\n</ol>\n\n<ol>\n<li><a href=\"https://learn.microsoft.com/en-us/azure/storage/common/storage-account-sas-create-dotnet\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Account SAS</strong></a>: This method uses your storage account key to create a SAS. It's created at the storage account level, allowing access to multiple services within the account. It's typically used when you need to provide access to several services in your storage account. However, it involves sharing your account key, similar to the Service SAS.</li>\n</ol>\n\n<ul>\n<li>Ad hoc SAS: Defines start, expiry, and permissions in the SAS URI. Any SAS can be an ad hoc SAS.</li>\n<li>Service SAS: Uses a stored policy on resources to inherit start, expiry, and permissions.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 2
      },
      {
        "id": "section-3",
        "title": "How SAS Works",
        "content": "<p>A SAS requires two components: a URI to the resource you want to access and a SAS token that you've created to authorize access to that resource.</p>\n\n<ul>\n<li><strong>URI</strong>: <code>https://<account>.blob.core.windows.net/<container>/<blob>?</code></li>\n<li><strong>SAS token</strong>: <code>sp=r&st=2020-01-20T11:42:32Z&se=2020-01-20T19:42:32Z&spr=https&sv=2019-02-02&sr=b&sig=SrW1HZ5Nb6MbRzTbXCaPm%2BJiSEn15tC91Y4umMPwVZs%3D</code></li>\n</ul>\n\n<a href=\"https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas\" target=\"_blank\" rel=\"noopener noreferrer\">Reference</a>:\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Component</th>\n      <th>Friendly Name</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>sp</td>\n      <td><code>S</code>hared <code>P</code>ermissions</td>\n      <td>Controls the access rights. Possible values include: <code>a</code>dd, <code>c</code>reate, <code>d</code>elete, <code>l</code>ist, <code>r</code>ead, <code>w</code>rite. Ex: <code>sp=acdlrw</code> grants all the available rights.</td>\n    </tr>\n    <tr>\n      <td>st</td>\n      <td><code>S</code>hared Access Signature Start <code>T</code>ime</td>\n      <td>The date and time when access starts. Ex: <code>st=2023-07-28T11:42:32Z</code> means the access starts at 11:42:32 UTC on July 28, 2023.</td>\n    </tr>\n    <tr>\n      <td>se</td>\n      <td><code>S</code>hared Access Signature <code>E</code>xpiry Time</td>\n      <td>The date and time when access ends. Ex: <code>se=2023-07-28T19:42:32Z</code> means the access ends at 19:42:32 UTC on July 28, 2023.</td>\n    </tr>\n    <tr>\n      <td>sv</td>\n      <td><code>S</code>torage API <code>V</code>ersion</td>\n      <td>The version of the storage API to use. Ex: <code>sv=2020-02-10</code> means the storage API version 2020-02-10 is used.</td>\n    </tr>\n    <tr>\n      <td>sr</td>\n      <td><code>S</code>torage <code>R</code>esource</td>\n      <td>The kind of storage being accessed. Possible values include: <code>b</code>lob, <code>f</code>ile, <code>q</code>ueue, <code>t</code>able, <code>c</code>ontainer, <code>d</code>irectory. Ex: <code>sr=b</code> means a blob is being accessed.</td>\n    </tr>\n    <tr>\n      <td>sig</td>\n      <td><code>Sig</code>nature</td>\n      <td>The cryptographic signature. Ex: <code>sig=SrW1HZ5Nb6MbRzTbXCaPm%2BJiSEn15tC91Y4umMPwVZs%3D</code> is a cryptographic signature.</td>\n    </tr>\n    <tr>\n      <td>sip</td>\n      <td><code>S</code>ource <code>IP</code> Range</td>\n      <td>(Optional) Allowed IP addresses or IP range. Ex: <code>sip=168.1.5.60-168.1.5.70</code> means only the IP addresses from 168.1.5.60 to 168.1.5.70 are allowed.</td>\n    </tr>\n    <tr>\n      <td>spr</td>\n      <td><code>S</code>upported <code>Pr</code>otocols</td>\n      <td>(Optional) Allowed protocols. Possible values include: 'https', 'http,https'. Ex: <code>spr=https</code> means only HTTPS is allowed.</td>\n    </tr>\n    <tr>\n      <td>si</td>\n      <td><code>S</code>tored Access <strong>Policy</strong> <code>I</code>dentifier</td>\n      <td>(Optional) The name of the stored access policy. Ex: <code>si=MyAccessPolicy</code> means the stored access policy named \"MyAccessPolicy\" is used.</td>\n    </tr>\n    <tr>\n      <td>rscc</td>\n      <td><code>R</code>e<code>s</code>ponse <code>C</code>ache <code>C</code>ontrol</td>\n      <td>(Optional) The response header override for cache control. Ex: <code>rscc=public</code> means the \"Cache-Control\" header is set to \"public\".</td>\n    </tr>\n    <tr>\n      <td>rscd</td>\n      <td><code>R</code>e<code>s</code>ponse <code>C</code>ontent <code>D</code>isposition</td>\n      <td>(Optional) The response header override for content disposition. Ex: <code>rscd=attachment; filename=example.txt</code> means the \"Content-Disposition\" header is set to \"attachment; filename=example.txt\".</td>\n    </tr>\n    <tr>\n      <td>rsce</td>\n      <td><code>R</code>e<code>s</code>ponse <code>C</code>ontent <code>E</code>ncoding</td>\n      <td>(Optional) The response header override for content encoding. Ex: <code>rsce=gzip</code> means the \"Content-Encoding\" header is set to \"gzip\".</td>\n    </tr>\n    <tr>\n      <td>rscl</td>\n      <td><code>R</code>e<code>s</code>ponse <code>C</code>ontent <code>L</code>anguage</td>\n      <td>(Optional) The response header override for content language. Ex: <code>rscl=en-US</code> means the \"Content-Language\" header is set to \"en-US\".</td>\n    </tr>\n    <tr>\n      <td>rsct</td>\n      <td><code>R</code>e<code>s</code>ponse <code>C</code>ontent <code>T</code>ype</td>\n      <td>(Optional) The response header override for content type. Ex: <code>rsct=text/plain</code> means the \"Content-Type\" header is set to \"text/plain\".</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Note: All 2-letter parameters are required, except <code>si</code> (Access Policy)</p>",
        "type": "content",
        "estimatedReadTime": 3
      },
      {
        "id": "section-4",
        "title": "Best Practices",
        "content": "<ul>\n<li>Always use HTTPS.</li>\n<li>Use user delegation SAS wherever possible.</li>\n<li>Set your expiration time to the smallest useful value.</li>\n<li>Only grant the access that's required.</li>\n<li>Create a middle-tier service to manage users and their access to storage when there's an unacceptable risk of using a SAS.</li>\n</ul>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-5",
        "title": "Stored Access Policies",
        "content": "<p>Allow you to group SAS and set additional constraints like start time, expiry time, and permissions. Work on <strong>container</strong> level.</p>\n\n<p>Use <code>SetAccessPolicy</code> on <code>BlobContainer</code> to apply an array containing a single <code>BlobSignedIdentifier</code> that has a configured <code>BlobAccessPolicy</code> for the <code>AccessPolicy</code> property.</p>\n<p><pre><code class=\"language-cs\">BlobSignedIdentifier identifier = new BlobSignedIdentifier\n{\n    Id = &quot;stored access policy identifier&quot;,\n    AccessPolicy = new BlobAccessPolicy\n    {\n        ExpiresOn = DateTimeOffset.UtcNow.AddHours(1),\n        Permissions = &quot;rw&quot;\n    }\n};\n\nblobContainer.SetAccessPolicy(permissions: new BlobSignedIdentifier[] { identifier });</code></pre></p>\n<p><pre><code class=\"language-sh\">az storage container policy create \\\n    --name &lt;stored access policy identifier&gt; \\\n    --container-name &lt;container name&gt; \\\n    --start &lt;start time UTC datetime&gt; \\\n    --expiry &lt;expiry time UTC datetime&gt; \\\n    --permissions &lt;(a)dd, (c)reate, (d)elete, (l)ist, (r)ead, or (w)rite&gt; \\\n    --account-key &lt;storage account key&gt; \\\n    --account-name &lt;storage account name&gt; \\</code></pre></p>\n<p>To cancel (revoke) a policy, you can either delete it, rename it, or set its expiration time to a past date.</p>\n\n<p>To remove all access policies from the resource, call the <code>Set ACL</code> operation with an empty request body.</p>",
        "type": "content",
        "estimatedReadTime": 1
      },
      {
        "id": "section-6",
        "title": "Working with SAS",
        "content": "<p>Gist:</p>\n\n<ul>\n<li>Service SAS and Account SAS use <code>StorageSharedKeyCredential</code>; User delegation SAS use <code>DefaultAzureCredential</code> or similar Entra ID</li>\n<li>Service SAS and User delegation SAS use <code>BlobSasBuilder</code>; Account SAS uses <code>AccountSasBuilder</code></li>\n<li>Set permissions: <code>BlobSasPermissions</code> for user and service; <code>AccountSasPermissions</code> for account</li>\n<li>Obtaining URI:</li>\n<li>User delegation SAS: Use key generated from <code>BlobServiceClient.GetUserDelegationKeyAsync</code> as first param of <code>BlobSasBuilder.ToSasQueryParameters(key, accountName)</code>; pass it to <code>BlobUriBuilder(BlobClient.Uri).Sas</code></li>\n<li>Service SAS: <code>BlobClient.GenerateSasUri(BlobSasBuilder)</code></li>\n<li>Account SAS: <code>BlobSasBuilder.ToSasQueryParameters(sharedKeyCredential)</code> and construct Uri from it at root level (<code><a href=\"https://{accountName}.blob.core.windows.net?{sasToken}\" target=\"_blank\" rel=\"noopener noreferrer\">https://{accountName}.blob.core.windows.net?{sasToken}</a></code>)</li>\n</ul>\n<p><pre><code class=\"language-cs\">// Using StorageSharedKeyCredential with account name and key directly for authentication.\n// This key has full permissions to all operations on all resources in your storage account.\n// Works for all SAS types, but less secure.\nvar credential = new StorageSharedKeyCredential(&quot;&lt;account-name&gt;&quot;, &quot;&lt;account-key&gt;&quot;);\n\n// Using DefaultAzureCredential with Entra ID. More secure, but doesn&#39;t work for Service SAS.\n// TokenCredential credential = new DefaultAzureCredential();\n\nvar serviceClient = new BlobServiceClient(new Uri(&quot;&lt;account-url&gt;&quot;), credential);\nvar blobClient = serviceClient.GetBlobContainerClient(&quot;&lt;container-name&gt;&quot;).GetBlobClient(&quot;&lt;blob-name&gt;&quot;);\n\n// Create a SAS token for the blob resource that&#39;s also valid for 1 day\nBlobSasBuilder sasBuilder = new BlobSasBuilder()\n{\n    BlobContainerName = blobClient.BlobContainerName,\n    BlobName = blobClient.Name,\n    Resource = &quot;b&quot;, // HINT: in case of missing BlobName property, then Resource = &quot;c&quot;\n    StartsOn = DateTimeOffset.UtcNow,\n    ExpiresOn = DateTimeOffset.UtcNow.AddDays(1)\n};\nsasBuilder.SetPermissions(BlobSasPermissions.Read | BlobSasPermissions.Write);\n\n////////////////////////////////////////////////////\n// User Delegation SAS\n////////////////////////////////////////////////////\n\n// Request the user delegation key\n// UserDelegationKey is used to sign the SAS token and has its own validity (can be used for multiple SAS)\nUserDelegationKey userDelegationKey = await serviceClient.GetUserDelegationKeyAsync(\n    DateTimeOffset.UtcNow,\n    DateTimeOffset.UtcNow.AddDays(1));\nvar userSas = sasBuilder.ToSasQueryParameters(userDelegationKey, serviceClient.AccountName);\n// Add the SAS token to the blob URI\nBlobUriBuilder uriBuilder = new BlobUriBuilder(blobClient.Uri) { Sas = userSas };\nvar blobClientSASUserDelegation = new BlobClient(uriBuilder.ToUri());\n\n////////////////////////////////////////////////////\n// Service SAS\n////////////////////////////////////////////////////\n\nUri blobSASURIService = blobClient.GenerateSasUri(sasBuilder);\nvar blobClientSASService = new BlobClient(blobSASURIService);</code></pre></p>\n<p>Account SAS:</p>\n<p>`<pre><code class=\"language-cs\">var sharedKeyCredential = new StorageSharedKeyCredential(&quot;&lt;account-name&gt;&quot;, &quot;&lt;account-key&gt;&quot;);\n\n// Create a SAS token that&#39;s valid for one day\nvar sasBuilder = new AccountSasBuilder()\n{\n    Services = AccountSasServices.Blobs | AccountSasServices.Queues,\n    ResourceTypes = AccountSasResourceTypes.Service,\n    ExpiresOn = DateTimeOffset.UtcNow.AddDays(1),\n    Protocol = SasProtocol.Https\n};\nsasBuilder.SetPermissions(AccountSasPermissions.Read | AccountSasPermissions.Write);\n\n// Use the key to get the SAS token\n// NOTE: You can pass sharedKeyCredential to ToSasQueryParameters (also valid for Service SAS)\nvar sasToken = sasBuilder.ToSasQueryParameters(sharedKeyCredential).ToString();\n\n// Create a BlobServiceClient object with the account SAS appended\nvar blobServiceURI = __CODEBLOCK_1__quot;https://{accountName}.blob.core.windows.net&quot;;\nvar blobServiceClientAccountSAS = new BlobServiceClient(\n    new Uri(__CODEBLOCK_1__quot;{blobServiceURI}?{sasToken}&quot;));</code></pre></p>\n<p><pre><code class=\"language-sh\"># Assign the necessary permissions to the user\naz role assignment create \\\n --role &quot;Storage Blob Data Contributor&quot; \\\n --assignee &lt;email&gt; \\\n --scope &quot;/subscriptions/&lt;subscription&gt;/resourceGroups/&lt;resource-group&gt;/providers/Microsoft.Storage/storageAccounts/&lt;storage-account&gt;&quot;\n\n# Account Level SAS: --account-name and --account-key\n# Service Level SAS: --resource-types + same as above\n# User Level SAS: --auth-mode login\n# (applicable for Stored Access Policies as well)\n\n# Generate a user delegation SAS for a container\naz storage container generate-sas \\\n --account-name &lt;storage-account&gt; \\\n --name &lt;container&gt; \\\n --permissions acdlrw \\\n --expiry &lt;date-time&gt; \\\n --auth-mode login \\\n --as-user\n\n# Generate a user delegation SAS for a blob\naz storage blob generate-sas \\\n --account-name &lt;storage-account&gt; \\\n --container-name &lt;container&gt; \\\n --name &lt;blob&gt; \\\n --permissions acdrw \\\n --expiry &lt;date-time&gt; \\\n --auth-mode login \\\n --as-user \\\n --full-uri\n\n# Revoke all user delegation keys for the storage account\naz storage account revoke-delegation-keys \\\n --name &lt;storage-account&gt; \\\n --resource-group $resourceGroup</code></pre>`</p>",
        "type": "content",
        "estimatedReadTime": 3
      }
    ],
    "relatedTopics": [
      "Entra ID",
      "Graph"
    ],
    "officialDocs": "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview",
    "userNotes": "",
    "lastUpdated": "2025-09-18"
  }
];

// Helper functions for working with study materials
export function getAllStudyMaterials(): StudyMaterial[] {
  return studyMaterials;
}

export function getStudyMaterialByTopic(topicId: string): StudyMaterial | undefined {
  return studyMaterials.find(material => material.id === topicId);
}

export function getStudyMaterialsByDifficulty(difficulty: string): StudyMaterial[] {
  return studyMaterials.filter(material => material.difficulty === difficulty);
}

export function getStudyMaterialsByTag(tag: string): StudyMaterial[] {
  return studyMaterials.filter(material => 
    material.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function searchStudyMaterials(query: string): StudyMaterial[] {
  const searchTerm = query.toLowerCase();
  return studyMaterials.filter(material =>
    material.title.toLowerCase().includes(searchTerm) ||
    material.description.toLowerCase().includes(searchTerm) ||
    material.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    material.sections.some(section => 
      section.title.toLowerCase().includes(searchTerm) ||
      section.content.toLowerCase().includes(searchTerm)
    )
  );
}

export function getTopicSuggestions(query: string): string[] {
  const suggestions = new Set<string>();
  const searchTerm = query.toLowerCase();
  
  studyMaterials.forEach(material => {
    if (material.title.toLowerCase().includes(searchTerm)) {
      suggestions.add(material.title);
    }
    material.tags.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) {
        suggestions.add(tag);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 10);
}

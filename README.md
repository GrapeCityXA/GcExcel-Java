# GrapeCity Documents for Excel, Java平台版
葡萄城新增了Excel文档（GcExcel）Java版，这是一种基于VSTO的高速、功能丰富的Excel文档API，可以帮助开发人员在Java应用程序中使用电子表格。 该库有助于您在任何应用程序中生成并将文件转换为pdf，计算，格式化和解析电子表格。 您可以使用各种功能，如导入电子表格，计算数据，查询，生成和导出任何电子表格，添加排序，过滤，格式化，条件格式和数据验证，分组，迷你图，图表，形状，图片，切片器，评论 ，超链接，主题等。此外，您可以导入现有的Excel模板，添加数据并保存电子表格。 您还可以将GcExcel与Spread.Sheets一起使用，Spread.Sheets是GrapeCity SpreadJS中包含的另一个GrapeCity Spread产品。 GcExcel还可以在服务器端导入和导出Excel模板文件。 Spread.Sheets在浏览器（客户端）中作为查看器或编辑器工作。

使用GcExcel，您还可以在Windows，MAC和Linux上完全支持在Java应用程序中加载，编辑，分析，转换和保存电子表格。

此存储库包含示例和GcExcel Showcases的源项目，以帮助您学习和编写自己的应用程序。

| 目录    | 简介    |
| ------------- |-------------|
| gcexcel     | 包含最新的GcExcel jar包及其依赖包 |
| Examples.Library     | 一组Java示例，可帮助您学习和探索API功能 |
| SpringBootDemo/SpringBoot+React     | 一个源项目，演示如何将GcExcel Java与Spring Boot + React + Spreadsheet一起使用|
| SpringBootDemo/SpringBoot+Angular2     | 一个源项目，演示如何将GcExcel与SpringBoot + Angular2 + Spread.Sheets一起使用|

# 发行说明
## 2.2.0
### 新特性
* 将形状导出的Excel文件导出为pdf。
* 在不同的工作簿之间剪切/复制范围。
* 在不同的工作簿之间复制/移动工作表。
* 控制在插入/删除行/列后是否调整分页符。
* 加载或保存csv文件时自定义行/列/单元格删除程序。
* 保存为pdf时，设置尾部重复行和右侧重复列。
* 支持复制和粘贴范围内的粘贴选项。
* 支持IRange.find（）和IRange.replace（）方法。
* 显示或隐藏不同类型的数据透视表样式。
* 支持将透视表样式导出为pdf。
* 支持为每个数据透视字段设置数字格式。
* Excel I / O后现在可以保留日语ruby。
* 在保存为pdf文件之前，获取并自定义每个页面设置。
* 渲染pdf文件中的任何工作表范围。
* 保存为pdf时，保持行/列更加清晰。
* 将多个工作簿保存到一个pdf文件中。
* 将特定页面从电子表格导出为pdf
* 将多个电子表格页面保存到一个pdf页面中。
* 支持IRange.autoFit方法以适合行/列。
* 支持IRange.FormulaArrayR1C1属性以获取或设置R1C1格式的数组公式。
* 在打开Excel文件时支持更多导入标志。
* Excel I / O后将保留OLEObject。
* 支持缩小以适应，包装文本，同时保存为pdf。
### 修复的Bug 
* GcExcel忽略TEXTJOIN公式中的'ignore_empty'参数。（DOCXLS-970）
* 在特定工作簿上使用ToJson时生成的大型JSON文件。（DOCXLS-968）
* 当公式设置为空时，UsedRange.Value将不正确的值设置为范围。（DOCXLS-956）
## 2.1.5
### 修复的Bug 
* 使用GcExcel进行JSON I / O后，列宽，字体大小和图片的左侧位置会发生变化。（DOCXLS-902）
* 使用GcExcel在JSON I / O之后更改单元格字体。（DOCXLS-921）
* 次要类别轴的可见属性返回不正确的值。（DOCXLS-849）
* 堆积面积图的值轴的主要和次要单位返回不正确的值。（DOCXLS-805）
* 100％堆积图表的值轴的主要和次要单位返回不正确的值。（DOCXLS-800）
* 设置Axis.DisplayUnit时，数据标签的文本返回不正确的值。（DOCXLS-768）
* 打开包含无效公式的json文件时抛出异常。（DOCXLS-948）
## 2.1.4
### 功能增强
* 将单个工作表导出为PDF的性能得到显着改善。
* 当json包含表格样式和多个命名样式时，fromJson方法得到了改进。
* 将电子表格导出为PDF时，GcExcel现在将缩放系数的最小值设置为10％，类似于MS Excel设置。
### 修复的Bug 
* 如果设置了Color，则TintAndShade属性不会按预期工作。（DOCXLS-872）
* 包含SUBTOTAL公式的单元格不会返回正确的值。（DOCXLS-881）
* 打开Open XML SDK保存的Excel文件时抛出InvalidFormulaException。
## 2.1.3
### 修复的Bug 
* 代码中指定的图像大小不适用于生成的Excel文件中的图像（DOCXLS-787）
* 使用@符号设置公式修剪列名称。（DOCXLS-804）
* 数据标签的分隔符未返回正确的值。（DOCXLS-830）
* 当workbook.getEnableCalculation（）为false时，Cell的值始终返回0.（DOCXLS-834）
* 查找字符串值时，提高查找函数的性能。
## 2.1.2
### 修复的Bug 
* GcExcel无法加载包含SUMPRODUCT公式的Excel文件。（DOCXLS-733）
## 2.1.1
### 功能增强
* 添加了IWorksheet.FixedPageBreaks来控制在插入/删除行或列后是否调整分页符。
* 改进了包装文本对pdf的影响。
### 修复的Bug 
* 插入/删除行或列后不会调整分页符。（DOCXLS-728）
* 调用IRange.ClearContents（）后抛出NullReferenceException。（DOCXLS-731）
* 编辑和保存由ClosedXML生成的XML时发生NullReferenceException。（DOCXLS-726）
* 通过代码刷新数据透视表并保存它，破坏生成的Excel文件。（DOCXLS-739）
* 在刷新某些* .xlsx文件中的数据透视表时抛出ArgumentOutOfRangeException。（DOCXLS-740）
* 删除活动工作表并保存Excel文件时，在打开保存的Excel文件时会出现错误对话框。（DOCXLS-747）
* 在调用Chart的SetSourceData时抛出StackOverflowException。（DOCXLS-724）
* Color.Empty在单元格上留下黑色。（DOCXLS-722）
* 使用FromJson方法时抛出错误。（DOCXLS-734）
* 使用MAXIFS功能会导致#NAME？ 单元格错误。（DOCXLS-749）

## 2.1.0
### 新特性
* 当JSON文件包含多个样式时，workbook.fromJson（）方法的性能得到了增强。
* 用户现在可以导入和导出包含宏的电子表格。虽然这些不会被执行，但现在保存时将保留宏。
* 添加了对加载和保存带有形状的GrapeCity SpreadJS JSON文件的支持。
* 用户现在可以通过对单元格中输入的文本信息应用不同的样式来在单元格中设置富文本格式。
* 使用自定义命名样式时，用户现在可以修改现有样式并将其添加到样式集合中。
* 用户现在可以将带有垂直文本的Excel文件导出为PDF。
* 现在，用户可以在工作表中插入任何背景图像，包​​括他们的组织徽标，自定义水印或他们选择的壁纸，没有任何问题。
* 现在可以为所有版本的Eclipse Maven插件自动安装PDFBox。
* 提供了对最近使用JDK 8引入的新Date Time API的广泛支持。
* 数据透视表已得到增强，以支持Excel 2016中的日期字段组。
* 为Open和Save方法添加了一些重载以避免传递文件格式。
### 修复的Bug
* Workbook.calculate（）方法现在可以正确评估单元格值。
* 在保存Excel文件以打开XML格式的同时，现在可以计算单元格的逻辑值而不会出现任何错误。

## 2.0.1
### 功能增强
* 改进了Workbook.fromJson方法的性能，当json文件包含很多样式时。
* PDFBox现在可以自动安装所有版本的eclipse maven插件。
### 修复的Bug
* 当Workbook打开HttpServletRequest.getInputStream（）返回的流时抛出异常。
* 如果使用的字体为空，则在保存为PDF时抛出空指针异常。
* GcExcel在使用空值加载ssjson文件时抛出异常。
* 表中的合并范围无法呈现为pdf。
* 加载ssjson文件后，隐藏的行仍然呈现为pdf。


# 其他资源
* 在线演示: [https://demo.grapecity.com.cn/spread/services/#/](https://demo.grapecity.com.cn/spread/services/#/)
* 下载地址: [https://www.grapecity.com.cn/download/?pid=66](https://www.grapecity.com.cn/download/?pid=66)

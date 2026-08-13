import path from 'node:path'

export const root = process.cwd()
export const dataRoot = path.join(root, 'data')
export const catalogUrl = 'https://downloads.s3.cardmarket.com/productCatalog/productList/products_singles_6.json'
export const reportRoot = path.join(root, 'var', 'audit-cardmarket')
export const legacyReportPaths = [
	path.join(root, 'var', 'audit-cardmarket-report.json'),
	path.join(root, 'var', 'cardmarket-duplicates-report.json')
]

export function relative(filePath: string): string {
	return path.relative(root, filePath).split(path.sep).join('/')
}

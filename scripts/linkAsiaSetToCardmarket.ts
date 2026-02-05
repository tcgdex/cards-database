import { Transform } from "jscodeshift"
import expansionsJSON from '../products_nonsingles_6.json'
import pathUtils from 'path/posix'
import { set, simplify } from "./utils/jscodeshift-utils"

// Run this code like
// npx jscodeshift ./data-asia/*/*.ts -t ./scripts/linkAsiaSetToCardmarket.ts --extensions=ts --parser=ts
// add --dry argument for testing
// need cardmarket nonsingles datatable jsons in root

export const translationMap = new Map<string, string>([
  ['ソード', 'Sword'],
  ['シールド', 'Shield'],
  ['VMAXライジング', 'VMAX Rising'],
  ['反逆クラッシュ', 'Rebellion Crash'],
  ['爆炎ウォーカー', 'Explosive Walker'],
  ['ムゲンゾーン', 'Infinity Zone'],
  ['伝説の鼓動', 'Legendary Heartbeat'],
  ['仰天のボルテッカー', 'Amazing Volt Tackle'],
  ['シャイニースターV', 'Shiny Star V'],
  ['一撃マスター', 'Single Strike Master'],
  ['連撃マスター', 'Rapid Strike Master'],
  ['双璧のファイター', 'Peerless Fighters'],
  ['白銀のランス', 'Silver Lance'],
  ['漆黒のガイスト', 'Jet-Black Spirit'],
  ['イーブイヒーローズ', 'Eievui Heroes'],
  ['摩天パーフェクト', 'Skyscraping Perfection'],
  ['蒼空ストリーム', 'Blue Sky Stream'],
  ['フュージョンアーツ', 'Fusion Arts'],
  ['25th アニバーサリーコレクション', '25th Anniversary Collection'],
  ['VMAXクライマックス', 'VMAX Climax'],
  ['スターバース', 'Star Birth'],
  ['バトルリージョン', 'Battle Region'],
  ['タイムゲイザー', 'Time Gazer'],
  ['スペースジャグラー', 'Space Juggler'],
  ['ダークファンタズマ', 'Dark Phantasma'],
  ['ロストアビス', 'Lost Abyss'],
  ['白熱のアルカナ', 'Incandescent Arcana'],
  ['パラダイムトリガー', 'Paradigm Trigger'],
  ['VSTARユニバース', 'VSTAR Universe'],
  ['スカーレットex', 'Scarlet ex'],
  ['バイオレットex', 'Violet ex'],
  ['トリプレットビート', 'Triplet Beat'],
  ['スノーハザード', 'Snow Hazard'],
  ['クレイバースト', 'Clay Burst'],
  ['ポケモンカード151', 'Pokémon Card 151'],
  ['黒炎の支配者', 'Ruler of the Black Flame'],
  ['レイジングサーフ', 'Raging Surf'],
  ['古代の咆哮', 'Ancient Roar'],
  ['未来の一閃', 'Future Flash'],
  ['シャイニートレジャーex', 'Shiny Treasure ex'],
  ['ワイルドフォース', 'Wild Force'],
  ['サイバージャッジ', 'Cyber Judge'],
  ['クリムゾンヘイズ', 'Crimson Haze'],
  ['変幻の仮面', 'Transformation Mask'],
  ['ナイトワンダラー', 'Night Wanderer'],
  ['ステラミラクル', 'Stellar Miracle'],
  ['楽園ドラゴーナ', 'Paradise Dragona'],
  ['超電ブレイカー', 'Super Electric Breaker'],
  ['テラスタルフェスex', 'Terastal Fest ex'],
  ['バトルパートナーズ', 'Battle Partners'],
  ['熱風のアリーナ', 'Hot Wind Arena'],
  ['ロケット団の栄光', 'Glory of the Rocket Gang'],
  ['ブラックボルト', 'Black Bolt'],
  ['ホワイトフレア', 'White Flare'],
]);

/**
 * Start editing here !
 */
const transformer: Transform = (file, api) => {
	const j = api.jscodeshift

	const root = j(file.source)
	return root
		.find(j.ObjectExpression)
		.forEach((path, index) => {
			if (index !== 0) return
			const filename = pathUtils.basename(file.path, '.ts')
			let simplified = simplify(path.node)
			const name = simplified.items.name.items.ja?.item?.value
			if (!name) return

			// get translated name when available
			const translatedName = translationMap.get(name) || name;

			console.log(translatedName)


			const expansion = expansionsJSON.products.find((it) => it.name.startsWith(translatedName))
				?.idExpansion
			if (!expansion) {
				return
			}

			set(j, simplified.item, j.objectExpression([
				j.property('init', j.identifier('cardmarket'), j.literal(expansion))
			]), 'thirdParty')
		})
		.toSource({ useTabs: true, lineTerminator: '\n' }).replace(/    /g, '	')
}

module.exports = transformer
module.exports.parser = 'ts'

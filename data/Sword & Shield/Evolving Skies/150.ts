import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Lucky Ice Pop",
		fr: "Glace Chanceuse",
		es: "Helado Suerte",
		it: "Ghiacciolo della Fortuna",
		pt: "Picolé da Sorte",
		de: "Glücks-Eis"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 20 damage from your Active Pokémon. If you healed any damage in this way, flip a coin. If heads, put this Lucky Ice Pop into your hand instead of the discard pile.",
		fr: "Soignez 20 dégâts de votre Pokémon Actif. Si des dégâts sont ainsi soignés, lancez une pièce. Si c'est face, placez cette Glace Chanceuse dans votre main plutôt que dans votre pile de défausse.",
		es: "Cura 20 puntos de daño a tu Pokémon Activo. Si has curado algún punto de daño de esta manera, lanza 1 moneda. Si sale cara, pon este Helado Suerte en tu mano en vez de en la pila de descartes.",
		it: "Cura il tuo Pokémon attivo da 20 danni. Se hai curato dei danni in questo modo, lancia una moneta. Se esce testa, prendi questo Ghiacciolo della Fortuna e aggiungilo alle carte che hai in mano invece che alla pila degli scarti.",
		pt: "Cure 20 pontos de dano do seu Pokémon Ativo. Se você curou qualquer dano desta forma, jogue uma moeda. Se sair cara, coloque este Picolé da Sorte na sua mão ao invés da pilha de descarte.",
		de: "Heile 20 Schadenspunkte bei deinem Aktiven Pokémon. Wenn du auf diese Weise Schaden geheilt hast, wirf 1 Münze. Nimm bei Kopf dieses Glücks-Eis auf deine Hand, anstatt es auf deinen Ablagestapel zu legen."
	},

	trainerType: "Item",
	illustrator: "inose yukie",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574208
	}
}

export default card

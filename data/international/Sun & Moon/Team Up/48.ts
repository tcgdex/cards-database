import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unnerve",
				'fr-fr': "Tension",
				'es-es': "Nerviosismo",
				'it-it': "Agitazione",
				'pt-br': "Enervar",
				'de-de': "Anspannung"
			},
			effect: {
				'en-us': "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				'es-es': "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				'it-it': "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				'pt-br': "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				'de-de': "Verhindere jedes Mal, wenn dein Gegner eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Spider Thread",
				'fr-fr': "Fil Arachnéen",
				'es-es': "Hilo Araña",
				'it-it': "Aracnotela",
				'pt-br': "Fios de Aranha",
				'de-de': "Spinnenfaden"
			},
			effect: {
				'en-us': "Put a card from your discard pile into your hand.",
				'fr-fr': "Placez une carte de votre pile de défausse dans votre main.",
				'es-es': "Pon 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque 1 carta da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
	},

	thirdParty: {
		cardmarket: 368979,
		tcgplayer: 183823
	}
}

export default card

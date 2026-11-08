import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [547],
	set: Set,

	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'pt-br': "Whimsicott",
		'it-it': "Whimsicott",
		'de-de': "Elfun"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'pt-br': "Cottonee",
		'it-it': "Cottonee",
		'de-de': "Waumboll"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Wafting Heal",
			'fr-fr': "Soin Ondoyant",
			'es-es': "Soplo Curativo",
			'pt-br': "Cura Esvoaçante",
			'it-it': "Fluttuacura",
			'de-de': "Wehende Heilung"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal all damage from your Active {G} Pokémon. If you healed any damage in this way, discard all Energy from that Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner tous les dégâts de votre Pokémon {G} Actif. Si vous avez soigné des dégâts de cette façon, défaussez toutes les Énergies attachées à ce Pokémon-là.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes curar todos los puntos de daño a tu Pokémon {G} Activo. Si has curado algún punto de daño de esta manera, descarta todas las Energías de ese Pokémon.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar todo o dano do seu Pokémon {G} Ativo. Se você curou qualquer dano desta forma, descarte todas as Energias daquele Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon {G} attivo da tutti i danni. Se hai curato dei danni in questo modo, scarta tutte le Energie da quel Pokémon.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du allen Schaden bei deinem Aktiven {G}-Pokémon heilen. Wenn du auf diese Weise Schaden geheilt hast, lege alle Energien von jenem Pokémon auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'pt-br': "Bomba de Sementes",
			'it-it': "Semebomba",
			'de-de': "Samenbomben"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	illustrator: "Mizue",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805397,
				tcgplayer: 610363
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805397,
				tcgplayer: 610363
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806420,
				tcgplayer: 610542
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806421,
				tcgplayer: 610643
			}
		},
	],
}

export default card

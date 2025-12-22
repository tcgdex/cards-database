import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [547],
	set: Set,

	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wafting Heal",
			fr: "Soin Ondoyant",
			es: "Soplo Curativo",
			it: "Fluttuacura",
			pt: "Cura Esvoaçante",
			de: "Wehende Heilung"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal all damage from your Active {G} Pokémon. If you healed any damage in this way, discard all Energy from that Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner tous les dégâts de votre Pokémon {G} Actif. Si vous avez soigné des dégâts de cette façon, défaussez toutes les Énergies attachées à ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes curar todos los puntos de daño a tu Pokémon {G} Activo. Si has curado algún punto de daño de esta manera, descarta todas las Energías de ese Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare il tuo Pokémon {G} attivo da tutti i danni. Se hai curato dei danni in questo modo, scarta tutte le Energie da quel Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar todo o dano do seu Pokémon {G} Ativo. Se você curou qualquer dano desta forma, descarte todas as Energias daquele Pokémon.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du allen Schaden bei deinem Aktiven {G}-Pokémon heilen. Wenn du auf diese Weise Schaden geheilt hast, lege alle Energien von jenem Pokémon auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			it: "Semebomba",
			pt: "Bomba de Sementes",
			de: "Samenbomben"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Mizue",

	thirdParty: {
		cardmarket: 760645
	}
}

export default card

import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		'en-us': "Dondozo",
		'fr-fr': "Oyacata",
		'es-es': "Dondozo",
		'it-it': "Dondozo",
		'pt-br': "Dondozo",
		'de-de': "Heerashai"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Release Rage",
			'fr-fr': "Colère Libérée",
			'es-es': "Furia Desatada",
			'it-it': "Scatenafuria",
			'pt-br': "Irradiar Ira",
			'de-de': "Wut ablassen"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Tatsugiri in your discard pile.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Nigirigon dans votre pile de défausse.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Tatsugiri en tu pila de descartes.",
			'it-it': "Questo attacco infligge 50 danni per ogni Tatsugiri nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Tatsugiri na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes Nigiragi in deinem Ablagestapel 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Splash",
			'fr-fr': "Éclaboussure Massive",
			'es-es': "Salpicadura Formidable",
			'it-it': "Grande Splash",
			'pt-br': "Borrifada Pesada",
			'de-de': "Heftiger Platscher"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "This Pokémon is a glutton, but it's bad at getting food. It teams up with a Tatsugiri to catch prey.",
	},

	thirdParty: {
        cardmarket: 702356,
        tcgplayer: 487913
    }
}

export default card
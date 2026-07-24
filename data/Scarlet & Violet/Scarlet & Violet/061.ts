import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		en: "Dondozo",
		fr: "Oyacata",
		es: "Dondozo",
		it: "Dondozo",
		pt: "Dondozo",
		de: "Heerashai"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Release Rage",
			fr: "Colère Libérée",
			es: "Furia Desatada",
			it: "Scatenafuria",
			pt: "Irradiar Ira",
			de: "Wut ablassen"
		},

		effect: {
			en: "This attack does 50 damage for each Tatsugiri in your discard pile.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Nigirigon dans votre pile de défausse.",
			es: "Este ataque hace 50 puntos de daño por cada Tatsugiri en tu pila de descartes.",
			it: "Questo attacco infligge 50 danni per ogni Tatsugiri nella tua pila degli scarti.",
			pt: "Este ataque causa 50 pontos de dano para cada Tatsugiri na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes Nigiragi in deinem Ablagestapel 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Heavy Splash",
			fr: "Éclaboussure Massive",
			es: "Salpicadura Formidable",
			it: "Grande Splash",
			pt: "Borrifada Pesada",
			de: "Heftiger Platscher"
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
		en: "This Pokémon is a glutton, but it's bad at getting food. It teams up with a Tatsugiri to catch prey.",
	},

	thirdParty: {
        cardmarket: 702356,
        tcgplayer: 487913
    }
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		en: "Orbeetle",
		fr: "Astronelle",
		es: "Orbeetle",
		it: "Orbeetle",
		pt: "Orbeetle",
		de: "Maritellit"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme",
		es: "Dottler",
		it: "Dottler",
		pt: "Dottler",
		de: "Keradar"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Satellite Beam",
			fr: "Rayon Satellite",
			es: "Rayo Satélite",
			it: "Raggio Satellitare",
			pt: "Feixe-satélite",
			de: "Satellitenstrahl"
		},

		effect: {
			en: "This attack does 30 damage for each Energy card in your opponent's discard pile.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans la pile de défausse de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño por cada carta de Energía en la pila de descartes de tu rival.",
			it: "Questo attacco infligge 30 danni per ogni carta Energia nella pila degli scarti del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano para cada carta de Energia na pilha de descarte do seu oponente.",
			de: "Diese Attacke fügt für jede Energiekarte im Ablagestapel deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Brain Shake",
			fr: "Cahot Mental",
			es: "Sacudida Cerebral",
			it: "Scuotimente",
			pt: "Chacoalhada Cerebral",
			de: "Gehirnschütteln"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "It emits psychic energy to observe and study what's around it—and what's around it can include things over six miles away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740488,
				tcgplayer: 523611,
				cardtrader: 265102
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740488,
				tcgplayer: 523611,
				cardtrader: 265102
			}
		},
	],

	illustrator: "Oku",

	
}

export default card

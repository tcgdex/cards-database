import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Chuck",
			fr: "Bazardage",
			es: "Desechar",
			it: "Tiro",
			pt: "Tacar Fora",
			de: "Wurf"
		},

		effect: {
			en: "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez de votre main le nombre voulu de cartes Outil Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta cualquier cantidad de cartas de Herramienta Pokémon de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta un numero qualsiasi di carte Oggetto Pokémon che hai in mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte qualquer número de cartas de Ferramenta Pokémon da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			de: "Lege beliebig viele Pokémon-Ausrüstungen aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Venomous Hit",
			fr: "Frappe Venimeuse",
			es: "Golpe Venenoso",
			it: "Colpo Velenoso",
			pt: "Golpe Venenoso",
			de: "Giftiger Schlag"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		en: "Simisear VSTAR",
		fr: "Flamoutan VSTAR",
		es: "Simisear V-ASTRO",
		it: "Simisear V ASTRO",
		pt: "Simisear V-ASTRO",
		de: "Grillchita VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	evolveFrom: {
		en: "Simisear V",
		fr: "Flamoutan-V",
		es: "Simisear V",
		it: "Simisear-V",
		pt: "Simisear V",
		de: "Grillchita-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fireball Fever",
			fr: "Fièvre Boule de Feu",
			es: "Fiebre Ígnea",
			it: "Febbre Palladifuoco",
			pt: "Bola de Fogo Inquieta",
			de: "Feuerballfieber"
		},

		effect: {
			en: "You may discard up to 5 cards from the top of your deck. This attack does 40 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 5 cartes du dessus de votre deck. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 5 cartas de la parte superior de tu baraja. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare fino a cinque carte dalla cima del tuo mazzo. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar até 5 cartas de cima do seu baralho. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Du kannst bis zu 5 Karten von deinem Deck auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise auf deinen Ablagestapel gelegte Karte 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}, {
		cost: ["Fire"],

		name: {
			en: "Ember Star",
			fr: "Star Braise",
			es: "Astro Lumbre",
			it: "Astro Sfavillante",
			pt: "Brasa Astral",
			de: "Funkenstern"
		},

		effect: {
			en: "This attack does 30 damage for each Energy card in your discard pile. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans votre pile de défausse. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 30 puntos de daño por cada carta de Energía en tu pila de descartes. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 30 danni per ogni carta Energia nella tua pila degli scarti. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 30 pontos de dano para cada carta de Energia na sua pilha de descarte (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Diese Attacke fügt für jede Energiekarte in deinem Ablagestapel 30 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691740,
		tcgplayer: 478106
	}
}

export default card

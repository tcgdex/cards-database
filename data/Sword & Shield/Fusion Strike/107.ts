import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "This short-tempered and aggressive Pokémon chugs stagnant water to absorb any toxins it might contain."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Punk Shock",
			fr: "Choc Punk",
			de: "Punk-Schock",
			es: "Sacudida Punki",
			pt: "Punk Choque",
			it: "Shock Punk"
		},

		damage: 70,

		effect: {
			en: "You may choose to make your opponent's Active Pokémon Paralyzed. If you do, this Pokémon also does 70 damage to itself.",
			fr: "Vous pouvez choisir de laisser le Pokémon Actif de votre adversaire Paralysé. Dans ce cas, ce Pokémon s'inflige aussi 70 dégâts.",
			de: "Du kannst wählen, ob du das Aktive Pokémon deines Gegners paralysierst. Wenn du das machst, fügt dieses Pokémon auch sich selbst 70 Schadenspunkte zu.",
			es: "Puedes elegir dejar al Pokémon Activo de tu rival Paralizado. Si lo haces, este Pokémon también se hace 70 puntos de daño a sí mismo.",
			pt: "Você pode escolher deixar o Pokémon Ativo do seu oponente Paralisado. Se fizer isto, este Pokémon também causará 70 pontos de dano a si mesmo.",
			it: "Puoi scegliere di lasciare il Pokémon attivo del tuo avversario paralizzato. Se lo fai, questo Pokémon infligge anche 70 danni a se stesso."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582500,
		tcgplayer: 253263
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone VSTAR",
		fr: "Magnézone VSTAR",
		es: "Magnezone V-ASTRO",
		it: "Magnezone V ASTRO",
		pt: "Magnezone V-ASTRO",
		de: "Magnezone VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magnezone V",
		fr: "Magnézone-V",
		es: "Magnezone V",
		it: "Magnezone-V",
		pt: "Magnezone V",
		de: "Magnezone-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Magnetic Grip",
			fr: "Emprise Magnétique",
			es: "Agarre Magnético",
			it: "Presa Magnetica",
			pt: "Agarramento Magnético",
			de: "Magnetgriff"
		},

		effect: {
			en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Objet, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		damage: 180
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Star",
			fr: "Star Électro",
			es: "Astro Voltio",
			it: "Astro Elettrico",
			pt: "Eletricidade Astral",
			de: "Elektrostern"
		},

		effect: {
			en: "This attack does 90 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 90 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)(Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 90 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 90 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 90 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 Poder V-ASTRO por partida.)",
			de: "Diese Attacke fügt 2 Pokémon auf der Bank deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674067
	}
}

export default card
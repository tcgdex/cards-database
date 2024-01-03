import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott VSTAR",
		fr: "Farfaduvet VSTAR",
		es: "Whimsicott V-ASTRO",
		it: "Whimsicott V ASTRO",
		pt: "Whimsicott V-ASTRO",
		de: "Elfun VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	evolveFrom: {
		en: "Whimsicott V",
		fr: "Farfaduvet-V",
		es: "Whimsicott V",
		it: "Whimsicott-V",
		pt: "Whimsicott V",
		de: "Elfun-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Trick Wind",
			fr: "Vent Piégeux",
			es: "Viento Travieso",
			it: "Furbovento",
			pt: "Vento Travesso",
			de: "Trickwind"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Pokémon Tool or Special Energy cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Outil Pokémon ou Énergie spéciale de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Herramienta Pokémon o de Energía Especial de su mano.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Oggetto Pokémon o Energia speciale che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Ferramenta Pokémon ou de Energia Especial da própria mão.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Pokémon-Ausrüstungen oder Spezial-Energiekarten aus seiner Hand spielen."
		},

		damage: 160
	}, {
		cost: ["Psychic"],

		name: {
			en: "Fluffball Star",
			fr: "Douillet Star",
			es: "Astro Pelusa",
			it: "Astro Batuffolo",
			pt: "Bola Felpuda Astral",
			de: "Flauschballstern"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)(Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 60 pontos de dano a 1 um dos Pokémon do seu oponente para cada Energia ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 Poder V-ASTRO por partida.)",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 1 Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
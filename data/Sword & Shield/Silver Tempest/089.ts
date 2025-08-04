import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Dragapult",
		fr: "Lanssorien",
		es: "Dragapult",
		it: "Dragapult",
		pt: "Dragapult",
		de: "Katapuldra"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Dragon Launcher",
			fr: "Lanceur de Dragons",
			es: "Dracolanzadera",
			it: "Lanciadraghi",
			pt: "Lançador de Dragão",
			de: "Drachenschleuder"
		},

		effect: {
			en: "Discard a number of your Benched Dreepy up to the number of your opponent's Pokémon in play. Then, for each Dreepy you discarded in this way, choose 1 of your opponent's Pokémon and do 100 damage to it. You can't choose the same Pokémon more than once. This damage isn't affected by Weakness or Resistance.",
			fr: "Défaussez de votre Banc un nombre de vos Fantyrm inférieur ou égal au nombre de Pokémon en jeu de votre adversaire. Ensuite, pour chaque Fantyrm défaussé de cette façon, choisissez l'un des Pokémon de votre adversaire et infligez-lui 100 dégâts. Vous ne pouvez pas choisir le même Pokémon plus d'une fois. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			es: "Descarta una cantidad de tus Dreepy en Banca igual o inferior al número de Pokémon en juego de tu rival. Después, por cada Dreepy que hayas descartado de esta manera, elige 1 de los Pokémon de tu rival y hazle 100 puntos de daño. No puedes elegir el mismo Pokémon más de una vez. Este daño no se ve afectado por Debilidad o Resistencia.",
			it: "Scarta un numero di Dreepy che hai in panchina uguale o inferiore al numero di Pokémon in gioco del tuo avversario. Poi scegli uno dei Pokémon del tuo avversario per ogni Dreepy che hai scartato in questo modo e infliggigli 100 danni. Non puoi scegliere lo stesso Pokémon più di una volta. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
			pt: "Descarte um número de Dreepy do seu Banco até o número de Pokémon do seu oponente em jogo. Em seguida, para cada Dreepy descartado desta forma, escolha 1 dos Pokémon do seu oponente e cause 100 pontos de dano a ele. Você não pode escolher o mesmo Pokémon mais de uma vez. Este dano não é afetado por Fraqueza ou Resistência.",
			de: "Lege bis zu so viele deiner Grolldra, wie dein Gegner Pokémon im Spiel hat, von deiner Bank auf deinen Ablagestapel. Wähle anschließend für jedes auf diese Weise abgelegte Grolldra 1 Pokémon deines Gegners und füge jenem Pokémon 100 Schadenspunkte zu. Du kannst dasselbe Pokémon nicht mehr als einmal wählen. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			de: "Spukschuss"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682136,
		tcgplayer: 451743
	}
}

export default card

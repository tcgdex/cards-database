import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		en: "Shadow Rider Calyrex VMAX",
		fr: "Sylveroy Cavalier d'Effroi VMAX",
		es: "Calyrex Jinete Espectral VMAX",
		it: "Calyrex Cavaliere Spettrale VMAX",
		pt: "Calyrex Cavaleiro Espectral VMAX",
		de: "Rappenreiter-Coronospa VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shadow Rider Calyrex V",
		fr: "Sylveroy Cavalier d'Effroi-V",
		es: "Calyrex Jinete Espectral V",
		it: "Calyrex Cavaliere Spettrale-V",
		pt: "Calyrex Cavaleiro Espectral V",
		de: "Rappenreiter-Coronospa-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Underworld Door",
			fr: "Porte des Abîmes",
			es: "Puerta del Inframundo",
			it: "Portale Sottomondo",
			pt: "Portão do Submundo",
			de: "Tür zur Unterwelt"
		},

		effect: {
			en: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Benched Psychic Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre main à l'un de vos Pokémon Psychic de Banc. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, piochez 2 cartes.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic de tu mano a 1 de tus Pokémon Psychic en Banca. Si has unido Energía a un Pokémon de esta manera, roba 2 cartas.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon Psychic in panchina una carta Energia Psychic dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, pesca due carte.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Psychic da sua mão a 1 dos seus Pokémon Psychic no Banco. Se você ligou Energia a um Pokémon desta forma, compre 2 cartas.",
			de: "Einmal während deines Zuges kannst du 1 Psychic-Energiekarte aus deiner Hand an 1 Psychic-Pokémon auf deiner Bank anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, ziehe 2 Karten."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Geist",
			fr: "Spiritomax",
			es: "Maxiespíritu",
			it: "Dynaspirito",
			pt: "Assombração Max",
			de: "Dyna-Geist"
		},

		effect: {
			en: "This attack does 30 more damage for each Psychic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a todos tus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
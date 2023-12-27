import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Blissey V",
		fr: "Leuphorie V",
		es: "Blissey V",
		it: "Blissey V",
		pt: "Blissey V",
		de: "Heiteira V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Natural Cure",
			fr: "Remède Naturel",
			es: "Cura Natural",
			it: "Naturcura",
			pt: "Cura Natural",
			de: "Innere Kraft"
		},

		effect: {
			en: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
			es: "Cada vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
			it: "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
			pt: "Sempre que ligar 1 carta de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
			de: "Jedes Mal, wenn du 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Blissful Blast",
			fr: "Explosion Euphorique",
			es: "Explosión Feliz",
			it: "Esplosione Gioiosa",
			pt: "Explosão Maravilhosa",
			de: "Heiterer Hieb"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to this Pokémon. If you did any damage with this attack, you may attach up to 3 Energy cards from your discard pile to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon. Si vous avez infligé des dégâts avec cette attaque, vous pouvez attacher jusqu'à 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida a este Pokémon. Si has infligido daño con este ataque, puedes unir hasta 3 cartas de Energía de tu pila de descartes a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata a questo Pokémon. Sei hai inflitto dei danni con questo attacco, puoi assegnare a questo Pokémon fino a tre carte Energia dalla tua pila degli scarti.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada a este Pokémon. Se tiver causado qualquer dano com este ataque, você poderá ligar até 3 cartas de Energia da sua pilha de descarte a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte mehr zu. Wenn du mit dieser Attacke Schaden zugefügt hast, kannst du bis zu 3 Energiekarten aus deinem Ablagestapel an dieses Pokémon anlegen."
		},

		damage: "10+"
	}],

	retreat: 4,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

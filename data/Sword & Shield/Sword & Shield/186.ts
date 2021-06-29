import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Aurora Energy",
		fr: "Énergie Boréale",
		es: "Energía Aurora",
		it: "Energia Aurora",
		pt: "Energia da Aurora",
		de: "Aurora-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "You can attach this card to 1 of your Pokémon only if you discard another card from your hand.\n\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time.",
		fr: "Vous ne pouvez attacher cette carte à l’un de vos Pokémon que si vous défaussez une autre carte de votre main.\n\nTant que cette carte est attachée à un Pokémon, elle fournit tout type d’Énergie mais seulement une Énergie à la fois.",
		es: "Puedes unir esta carta a 1 de tus Pokémon solo si descartas otra carta de tu mano.\n\nMientras esta carta esté unida a 1 Pokémon, proporciona cualquier tipo de Energía, pero proporciona solo 1 Energía a la vez.",
		it: "Puoi assegnare questa carta a uno dei tuoi Pokémon solo se scarti un’altra carta che hai in mano.\n\nQuando è assegnata a un Pokémon, questa carta fornisce un’Energia di qualsiasi tipo, ma solo una alla volta.",
		pt: "Você só pode ligar esta carta a 1 dos seus Pokémon se descartar outra carta da sua mão.\n\nEnquanto esta carta estiver ligada a um Pokémon, ela fornecerá todo tipo de Energia, mas só fornecerá 1 Energia por vez.",
		de: "Du kannst diese Karte nur an 1 deiner Pokémon anlegen, wenn du 1 andere Karte aus deiner Hand auf deinen Ablagestapel legst.\n\nSolange diese Karte an ein Pokémon angelegt ist, liefert sie jeden Energietyp, aber immer nur jeweils 1 Energie."
	},

	energyType: "Special",
	regulationMark: "D"
}

export default card

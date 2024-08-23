import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Daydream",
			fr: "Rêve Éveillé",
			es: "Ensoñación",
			it: "Fantasticheria",
			pt: "Devaneio",
			de: "Tagtraum"
		},

		effect: {
			en: "During your opponent's next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends.",
			fr: "Pendant le prochain tour de votre adversaire, s'il attache une carte Énergie de sa main au Pokémon Défenseur, son tour se termine.",
			es: "Durante el próximo turno de tu rival, si une una carta de Energía de su mano al Pokémon Defensor, su turno termina.",
			it: "Se il tuo avversario assegna al Pokémon difensore una carta Energia dalla propria mano durante il suo prossimo turno, il suo turno finisce.",
			pt: "Durante o próximo turno do seu oponente, se ele ligar uma carta de Energia da mão dele ao Pokémon Defensor, o turno dele acabará.",
			de: "Wenn dein Gegner während seines nächsten Zuges 1 Energiekarte aus seiner Hand an das Verteidigende Pokémon anlegt, endet sein Zug."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
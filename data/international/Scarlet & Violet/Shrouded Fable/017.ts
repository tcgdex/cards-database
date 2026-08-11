import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Daydream",
			'fr-fr': "Rêve Éveillé",
			'es-es': "Ensoñación",
			'it-it': "Fantasticheria",
			'pt-br': "Devaneio",
			'de-de': "Tagtraum"
		},

		effect: {
			'en-us': "During your opponent's next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, s'il attache une carte Énergie de sa main au Pokémon Défenseur, son tour se termine.",
			'es-es': "Durante el próximo turno de tu rival, si une una carta de Energía de su mano al Pokémon Defensor, su turno termina.",
			'it-it': "Se il tuo avversario assegna al Pokémon difensore una carta Energia dalla propria mano durante il suo prossimo turno, il suo turno finisce.",
			'pt-br': "Durante o próximo turno do seu oponente, se ele ligar uma carta de Energia da mão dele ao Pokémon Defensor, o turno dele acabará.",
			'de-de': "Wenn dein Gegner während seines nächsten Zuges 1 Energiekarte aus seiner Hand an das Verteidigende Pokémon anlegt, endet sein Zug."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",


	illustrator: "Masako Tomii",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780908,
				tcgplayer: 560327
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780908,
				tcgplayer: 560327
			}
		},
	],
}

export default card

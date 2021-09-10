import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Togekiss",
		fr: "Togekiss",
		es: "Togekiss",
		it: "Togekiss",
		pt: "Togekiss",
		de: "Togekiss"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		468,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bright Veil",
				fr: "Voile Lumineux",
				es: "Velo Brillante",
				it: "Veloluce",
				pt: "Véu Brilhante",
				de: "Greller Schleier"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays an Item card from his or her hand, prevent all effects of that card done to your Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire joue une carte Objet de sa main, évitez tous les effets que la carte Objet peut infliger à vos Pokémon.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cada vez que tu rival juegue una carta de Objeto de su mano, evita todos los efectos de esa carta sobre tus Pokémon.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che il tuo avversario gioca una carta Strumento dalla sua mano, previeni tutti gli effetti di quella carta inflitti ai tuoi Pokémon.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, sempre que seu oponente jogar um card de Item da própria mão, impedirá todos os efeitos desse card sobre seus Pokémon.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere jedes Mal, wenn dein Gegner 1 Itemkarte von seiner Hand spielt, sämtliche Effekte, die diese Karte deinen Pokémon zufügen würde."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

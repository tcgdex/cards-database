import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		596,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unnerve",
				fr: "Tension",
				es: "Nerviosismo",
				it: "Agitazione",
				pt: "Enervar",
				de: "Anspannung"
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				es: "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				it: "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				pt: "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				de: "Verhindere jedes Mal, wenn dein Gegner eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spider Thread",
				fr: "Fil Arachnéen",
				es: "Hilo Araña",
				it: "Aracnotela",
				pt: "Fios de Aranha",
				de: "Spinnenfaden"
			},
			effect: {
				en: "Put a card from your discard pile into your hand.",
				fr: "Placez une carte de votre pile de défausse dans votre main.",
				es: "Pon 1 carta de tu pila de descartes en tu mano.",
				it: "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque 1 carta da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		es: "Meowth de Galar",
		it: "Meowth di Galar",
		pt: "Meowth de Galar",
		de: "Galar-Mauzi"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Evolution Roar",
				fr: "Rugissement Évolutif",
				es: "Rugido Evolución",
				it: "Urlo Evolutivo",
				pt: "Rugido Evolutivo",
				de: "Entwicklungsgebrüll"
			},
			effect: {
				en: "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may search your deck for a Galarian Perrserker, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez chercher dans votre deck un Berserkatt de Galar, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Debes descartar 2 cartas de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes buscar en tu baraja 1 Perrserker de Galar, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Devi scartare due carte che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo un Perrserker di Galar, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Você deve descartar 2 cartas da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá procurar por 1 Perrserker de Galar no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Du musst 2 Karten aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du dein Deck nach 1 Galar-Mauzinger durchsuchen, es deinem Gegner zeigen und es auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 60,
	types: ["Metal"],
	regulationMark: "D"
}

export default card

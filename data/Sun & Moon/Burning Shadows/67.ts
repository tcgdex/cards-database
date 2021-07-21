import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		es: "Rhyperior",
		it: "Rhyperior",
		pt: "Rhyperior",
		de: "Rihornior"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		464,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Toppling Wind",
				fr: "Mistral",
				es: "Viento Norte",
				it: "Granfolata",
				pt: "Vento Ascendente",
				de: "Windkipper"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards of your opponent’s deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar las 3 primeras cartas de la baraja de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare le tre carte in cima al mazzo del tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar os 3 cards de cima do baralho do seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Wrecker",
				fr: "Roc-Boulet",
				es: "Romperrocas",
				it: "Devastomasso",
				pt: "Demolidor de Pedras",
				de: "Felswerfer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance. This Pokémon can’t attack during your next turn.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia. Este Pokémon no puede atacar durante tu próximo turno.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza. Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência. Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card

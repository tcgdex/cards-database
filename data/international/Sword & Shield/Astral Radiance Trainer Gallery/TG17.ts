import { Card } from "models/database/card"
import Set from "../Astral Radiance Trainer Gallery"

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		'en-us': "Shadow Rider Calyrex V",
		'fr-fr': "Sylveroy Cavalier d'Effroi V",
		'es-es': "Calyrex Jinete Espectral V",
		'it-it': "Calyrex Cavaliere Spettrale V",
		'pt-br': "Calyrex Cavaleiro Espectral V",
		'de-de': "Rappenreiter-Coronospa V"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Shadow Mist",
			'fr-fr': "Brume d'Effroi",
			'es-es': "Neblina Espectral",
			'it-it': "Nebbiombra",
			'pt-br': "Névoa das Sombras",
			'de-de': "Schattennebel"
		},

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Énergie spéciale ou Stade de sa main.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Energía Especial o de Estadio de su mano.",
			'it-it': "Durante il prossimo turno del tuo avversario, questi non può giocare le carte Energia speciale o Stadio che ha in mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele(a) não poderá jogar nenhuma carta de Energia Especial ou de Estádio da própria mão.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Spezial-Energien oder Stadionkarten aus seiner Hand spielen."
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Astral Barrage",
			'fr-fr': "Éclat Spectral",
			'es-es': "Orbes Espectro",
			'it-it': "Schegge Astrali",
			'pt-br': "Barricada Astral",
			'de-de': "Astralfragmente"
		},

		effect: {
			'en-us': "Choose 2 of your opponent's Pokémon and put 5 damage counters on each of them.",
			'fr-fr': "Choisissez 2 des Pokémon de votre adversaire, puis placez 5 marqueurs de dégâts sur chacun d'eux.",
			'es-es': "Elige 2 de los Pokémon de tu rival y pon 5 contadores de daño en cada uno de ellos.",
			'it-it': "Scegli due dei Pokémon del tuo avversario e metti cinque segnalini danno su ciascuno di essi.",
			'pt-br': "Escolha 2 dos Pokémon do seu oponente e coloque 5 contadores de dano em cada um deles.",
			'de-de': "Wähle 2 Pokémon deines Gegners und lege 5 Schadensmarken auf jedes von ihnen."
		}
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
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658894,
				tcgplayer: 272488
			}
		},
	],
}

export default card

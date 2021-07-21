import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Impersonation",
				fr: "Usurpation",
				es: "Suplantación",
				it: "Emulazione",
				pt: "Sósia",
				de: "Verkörperung"
			},
			effect: {
				en: "Discard a Supporter card from your hand. If you do, use the effect of that card as the effect of this attack.",
				fr: "Défaussez une carte Supporter de votre main. Dans ce cas, utilisez l’effet de cette carte en tant qu’effet de cette attaque.",
				es: "Descarta 1 carta de Partidario de tu mano. Si lo haces, usa el efecto de esa carta como efecto de este ataque.",
				it: "Scarta una carta Aiuto che hai in mano. Se lo fai, usa l’effetto di quella carta come effetto di questo attacco.",
				pt: "Descarte 1 carta de Apoiador da sua mão. Se fizer isto, use o efeito daquela carta como o efeito deste ataque.",
				de: "Lege 1 Unterstützerkarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, kannst du den Effekt jener Karte als Effekt dieser Attacke einsetzen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mischievous Hands",
				fr: "Mains Malicieuses",
				es: "Manos Traviesas",
				it: "Mani Birichine",
				pt: "Mãos Maliciosas",
				de: "Dreiste Hände"
			},
			effect: {
				en: "Choose 2 of your opponent’s Pokémon and put 2 damage counters on each of them.",
				fr: "Choisissez 2 des Pokémon de votre adversaire et placez 2 marqueurs de dégâts sur chacun d’eux.",
				es: "Elige 2 de los Pokémon de tu rival y pon 2 contadores de daño en cada uno de ellos.",
				it: "Scegli due dei Pokémon del tuo avversario e metti due segnalini danno su ciascuno di essi.",
				pt: "Escolha 2 dos Pokémon do seu oponente e coloque 2 contadores de dano em cada um deles.",
				de: "Wähle 2 Pokémon deines Gegners und lege j2 Schadensmarken auf jedes von ihnen."
			},

		},
	],


	retreat: 1,



}

export default card

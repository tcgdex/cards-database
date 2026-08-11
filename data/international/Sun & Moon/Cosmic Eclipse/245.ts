import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu",
		'de-de': "Mimigma"
	},

	illustrator: "You Iribi",
	rarity: "Secret Rare",
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
				'en-us': "Impersonation",
				'fr-fr': "Usurpation",
				'es-es': "Suplantación",
				'it-it': "Emulazione",
				'pt-br': "Sósia",
				'de-de': "Verkörperung"
			},
			effect: {
				'en-us': "Discard a Supporter card from your hand. If you do, use the effect of that card as the effect of this attack.",
				'fr-fr': "Défaussez une carte Supporter de votre main. Dans ce cas, utilisez l’effet de cette carte en tant qu’effet de cette attaque.",
				'es-es': "Descarta 1 carta de Partidario de tu mano. Si lo haces, usa el efecto de esa carta como efecto de este ataque.",
				'it-it': "Scarta una carta Aiuto che hai in mano. Se lo fai, usa l’effetto di quella carta come effetto di questo attacco.",
				'pt-br': "Descarte 1 carta de Apoiador da sua mão. Se fizer isto, use o efeito daquela carta como o efeito deste ataque.",
				'de-de': "Lege 1 Unterstützerkarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, kannst du den Effekt jener Karte als Effekt dieser Attacke einsetzen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Mischievous Hands",
				'fr-fr': "Mains Malicieuses",
				'es-es': "Manos Traviesas",
				'it-it': "Mani Birichine",
				'pt-br': "Mãos Maliciosas",
				'de-de': "Dreiste Hände"
			},
			effect: {
				'en-us': "Choose 2 of your opponent’s Pokémon and put 2 damage counters on each of them.",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire et placez 2 marqueurs de dégâts sur chacun d’eux.",
				'es-es': "Elige 2 de los Pokémon de tu rival y pon 2 contadores de daño en cada uno de ellos.",
				'it-it': "Scegli due dei Pokémon del tuo avversario e metti due segnalini danno su ciascuno di essi.",
				'pt-br': "Escolha 2 dos Pokémon do seu oponente e coloque 2 contadores de dano em cada um deles.",
				'de-de': "Wähle 2 Pokémon deines Gegners und lege j2 Schadensmarken auf jedes von ihnen."
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "Although it's a quiet, lonely Pokémon, if you try to look at what's under its rag, it will become agitated and resist violently.",
	},

	thirdParty: {
		cardmarket: 398514,
		tcgplayer: 201356
	}
}

export default card

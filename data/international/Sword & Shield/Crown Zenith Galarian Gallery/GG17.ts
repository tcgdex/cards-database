import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [828],
	set: Set,

	name: {
		'en-us': "Thievul",
		'fr-fr': "Roublenard",
		'es-es': "Thievul",
		'it-it': "Thievul",
		'pt-br': "Thievul",
		'de-de': "Gaunux"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'it-it': "Nickit",
		'pt-br': "Nickit",
		'de-de': "Kleptifux"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Baffling",
			'fr-fr': "Déroutant",
			'es-es': "Desconcertar",
			'it-it': "Frastornare",
			'pt-br': "Desconcertante",
			'de-de': "Verblüffen"
		},

		effect: {
			'en-us': "If your opponent has 2 or fewer Prize cards remaining, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Pokémon V.",
			'fr-fr': "S'il reste 2 cartes Récompense ou moins à votre adversaire, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon-V de Banc.",
			'es-es': "Si a tu rival le quedan 2 cartas de Premio o menos, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon V en Banca.",
			'it-it': "Se il tuo avversario ha due o meno carte Premio rimanenti, ogni volta che gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon-V in panchina.",
			'pt-br': "Se o seu oponente tiver 2 ou menos cartas de Prêmio restantes, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, previna todos os efeitos daquela carta causados aos seus Pokémon V no Banco.",
			'de-de': "Wenn dein Gegner 2 oder weniger verbleibende Preiskarten hat, verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die den Pokémon-V auf deiner Bank zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691896,
				tcgplayer: 477056
			}
		},
	],
}

export default card

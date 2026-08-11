import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Ribombee",
		'fr-fr': "Rubombelle",
		'es-es': "Ribombee",
		'it-it': "Ribombee",
		'pt-br': "Ribombee",
		'de-de': "Bandelby"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		743,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mysterious Buzz",
				'fr-fr': "Bourdonnement Mystérieux",
				'es-es': "Zumbido Misterioso",
				'it-it': "Ronzio Misterioso",
				'pt-br': "Zumbido Misterioso",
				'de-de': "Geheimnisvolles Summen"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Fairy Pokémon in play.",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets que cette carte peut infliger à vos Pokémon Fairy en jeu.",
				'es-es': "Mientras este Pokémon esté en tu Banca, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon Fairy en juego.",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon Fairy in gioco.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados aos seus Pokémon Fairy em jogo.",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere jedes Mal, wenn dein Gegner eine Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die deinen Fairy-Pokémon im Spiel zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Some of Ribombee's pollen puffs are highly nutritious. They are sometimes sold as supplements.",
	},

	thirdParty: {
		cardmarket: 365783,
		tcgplayer: 178965
	}
}

export default card

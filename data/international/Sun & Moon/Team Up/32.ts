import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Blizzard Veil",
				'fr-fr': "Voile Blizzard",
				'es-es': "Velo Ventisca",
				'it-it': "Velobufera",
				'pt-br': "Véu de Nevasca",
				'de-de': "Blizzardschleier"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Water Pokémon.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon Water de Banc.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon Water en Banca.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon Water in panchina.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados aos seus Pokémon Water no Banco.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere jedes Mal, wenn dein Gegner eine Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die den Water-Pokémon auf deiner Bank zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Cold Cyclone",
				'fr-fr': "Cyclone Froid",
				'es-es': "Ciclón Frío",
				'it-it': "Criociclone",
				'pt-br': "Ciclone Gelado",
				'de-de': "Kältewirbel"
			},
			effect: {
				'en-us': "Move 2 Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez 2 Énergies Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
				'es-es': "Mueve 2 Energías Water de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta due Energie Water da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 2 Energias Water deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 2 Water-Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 70,

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

	retreat: 2,

	description: {
		'en-us': "A legendary bird Pokémon. It can create blizzards by freezing moisture in the air.",
	},

	thirdParty: {
		cardmarket: 368964,
		tcgplayer: 183803
	}
}

export default card

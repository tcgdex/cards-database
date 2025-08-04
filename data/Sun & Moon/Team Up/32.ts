import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		it: "Articuno",
		pt: "Articuno",
		de: "Arktos"
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
				en: "Blizzard Veil",
				fr: "Voile Blizzard",
				es: "Velo Ventisca",
				it: "Velobufera",
				pt: "Véu de Nevasca",
				de: "Blizzardschleier"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Water Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon Water de Banc.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a tus Pokémon Water en Banca.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che il tuo avversario gioca una carta Aiuto dalla sua mano, previeni tutti gli effetti di quella carta sui tuoi Pokémon Water in panchina.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, sempre que seu oponente jogar 1 carta de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados aos seus Pokémon Water no Banco.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere jedes Mal, wenn dein Gegner eine Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die den Water-Pokémon auf deiner Bank zugefügt werden."
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
				en: "Cold Cyclone",
				fr: "Cyclone Froid",
				es: "Ciclón Frío",
				it: "Criociclone",
				pt: "Ciclone Gelado",
				de: "Kältewirbel"
			},
			effect: {
				en: "Move 2 Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez 2 Énergies Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
				es: "Mueve 2 Energías Water de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta due Energie Water da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova 2 Energias Water deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 2 Water-Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
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

	thirdParty: {
		cardmarket: 368964,
		tcgplayer: 183803
	}
}

export default card

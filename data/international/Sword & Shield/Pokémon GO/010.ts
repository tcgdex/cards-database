import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'es-es': "Charizard",
		'it-it': "Charizard",
		'pt-br': "Charizard",
		'de-de': "Glurak"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Burn Brightly",
			'fr-fr': "Feu Éclatant",
			'es-es': "Quemadura Viva",
			'it-it': "Fuoco Acceso",
			'pt-br': "Brilho Ardente",
			'de-de': "Lichterloh brennen"
		},

		effect: {
			'en-us': "Each basic Fire Energy attached to your Pokémon provides FireFire Energy. You can't apply more than 1 Burn Brightly Ability at a time.",
			'fr-fr': "Chaque Énergie Fire de base attachée à vos Pokémon fournit de l'Énergie FireFire. Vous ne pouvez utiliser qu'un talent Feu Éclatant à la fois.",
			'es-es': "Cada Energía Fire Básica unida a tus Pokémon proporciona 2 Energías Fire. No puedes aplicar más de 1 habilidad Quemadura Viva a la vez.",
			'it-it': "Ogni Energia base Fire assegnata ai tuoi Pokémon fornisce Energia FireFire. Non puoi applicare più di un'abilità Fuoco Acceso alla volta.",
			'pt-br': "Cada Energia Fire básica ligada aos seus Pokémon fornece Energia FireFire. Você não pode usar mais de 1 Habilidade Brilho Ardente por vez.",
			'de-de': "Jede an deine Pokémon angelegte Basis-Fire-Energie liefert FireFire-Energie. Du kannst immer nur jeweils 1 Fähigkeit Lichterloh brennen einsetzen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flare Blitz",
			'fr-fr': "Boutefeu",
			'es-es': "Envite Ígneo",
			'it-it': "Fuococarica",
			'pt-br': "Blitz de Labaredas",
			'de-de': "Flammenblitz"
		},

		effect: {
			'en-us': "Discard all Fire Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie Fire de ce Pokémon.",
			'es-es': "Descarta todas las Energías Fire de este Pokémon.",
			'it-it': "Scarta tutte le Energie Fire da questo Pokémon.",
			'pt-br': "Descarte todas as Energias Fire deste Pokémon.",
			'de-de': "Lege alle Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665244,
				tcgplayer: 274439
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665244,
				tcgplayer: 274439
			}
		},
	],
}

export default card

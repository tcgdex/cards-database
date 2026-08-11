import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Bastiodon",
		'fr-fr': "Bastiodon",
		'es-es': "Bastiodon",
		'it-it': "Bastiodon",
		'pt-br': "Bastiodon",
		'de-de': "Bollterus"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		411,
	],

	hp: 160,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Earthen Shield",
				'fr-fr': "Bouclier de Terre",
				'es-es': "Escudo Terrestre",
				'it-it': "Terrascudo",
				'pt-br': "Escudo Terra",
				'de-de': "Im Schutz der Erde"
			},
			effect: {
				'en-us': "Prevent all damage done to your Metal Pokémon by attacks from your opponent’s Pokémon that have any Special Energy attached to them.",
				'fr-fr': "Évitez tous les dégâts d’attaque infligés à vos Pokémon Metal par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
				'es-es': "Evita todo el daño infligido a tus Pokémon Metal por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
				'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon Metal dagli attacchi dei Pokémon del tuo avversario che abbiano delle Energie speciali assegnate.",
				'pt-br': "Previne todo o dano causado aos seus Pokémon Metal por ataques dos Pokémon do seu oponente que tenham alguma Energia Especial ligada a eles.",
				'de-de': "Verhindere allen Schaden, der deinen Metal-Pokémon durch Attacken von Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Recul",
				'es-es': "Oprimir",
				'it-it': "Spintonare",
				'pt-br': "Rebaixar",
				'de-de': "Runterdrücken"
			},
			effect: {
				'en-us': "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Você pode fazer com que o seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 110,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lived in the same environments as Rampardos. Their fossils have been found together—seemingly from after they'd fought to the finish.",
	},

	thirdParty: {
		cardmarket: 316012,
		tcgplayer: 157702
	}
}

export default card

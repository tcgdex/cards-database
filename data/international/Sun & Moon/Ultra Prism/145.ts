import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Dusk Mane Necrozma GX",
		'fr-fr': "Necrozma Crinière du Couchant GX",
		'es-es': "Necrozma Melena Crepuscular GX",
		'it-it': "Necrozma Criniera del Vespro GX",
		'pt-br': "Necrozma Juba Crepúsculo GX",
		'de-de': "Abendmähne-Necrozma GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		800,
	],

	hp: 190,

	types: [
		"Metal",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch’Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Meteor Tempest",
				'fr-fr': "Tempête Météorique",
				'es-es': "Tempestad Meteórica",
				'it-it': "Tempesta Meteoritica",
				'pt-br': "Tempestade Meteórica",
				'de-de': "Meteorsturm"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 220,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Sun’s Eclipse GX",
				'fr-fr': "Éclipse Solaire-GX",
				'es-es': "Eclipse de Sol GX",
				'it-it': "Eclissi di Sole-GX",
				'pt-br': "Eclipse do Sol GX",
				'de-de': "Solarfinsternis GX"
			},
			effect: {
				'en-us': "You can use this attack only if you have more Prize cards remaining than your opponent. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Vous pouvez utiliser cette attaque seulement s’il vous reste plus de cartes Récompense que votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Puedes usar este ataque solo si te quedan más cartas de Premio que a tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Puoi usare questo attacco solo se hai più carte Premio rimanenti del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Você só pode usar este ataque se tiver mais cartas de Prêmio restantes do que seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Du kannst diese Attacke nur einsetzen, wenn du mehr verbleibende Preiskarten hast als dein Gegner. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 250,

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

	thirdParty: {
		cardmarket: 316069,
		tcgplayer: 157761
	}
}

export default card

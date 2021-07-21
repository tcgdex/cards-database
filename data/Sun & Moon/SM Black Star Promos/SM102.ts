import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Dusk Mane Necrozma-GX",
		fr: "Necrozma Crinière du Couchant-GX",
		es: "Necrozma Melena Crepuscular-GX",
		it: "Necrozma Criniera del Vespro-GX",
		pt: "Necrozma Juba Crepúsculo-GX",
		de: "Abendmähne-Necrozma-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
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
				en: "Meteor Tempest",
				fr: "Tempête Météorique",
				es: "Tempestad Meteórica",
				it: "Tempesta Meteoritica",
				pt: "Tempestade Meteórica",
				de: "Meteorsturm"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
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
				en: "Sun’s Eclipse GX",
				fr: "Éclipse Solaire GX",
				es: "Eclipse de Sol GX",
				it: "Eclissi di Sole GX",
				pt: "Eclipse do Sol GX",
				de: "Solarfinsternis GX"
			},
			effect: {
				en: "You can use this attack only if you have more Prize cards remaining than your opponent. (You can’t use more than 1 GX attack in a game.)",
				fr: "Vous pouvez utiliser cette attaque seulement s’il vous reste plus de cartes Récompense que votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Puedes usar este ataque solo si te quedan más cartas de Premio que a tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Puoi usare questo attacco solo se hai più carte Premio rimanenti del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Você só pode usar este ataque se tiver mais cartas de Prêmio restantes do que seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Du kannst diese Attacke nur einsetzen, wenn du mehr verbleibende Preiskarten hast als dein Gegner. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card

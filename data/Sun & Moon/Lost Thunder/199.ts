import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Blacephalon GX",
		fr: "Pierroteknik GX",
		es: "Blacephalon GX",
		it: "Blacephalon GX",
		pt: "Blacephalon GX",
		de: "Kopplosio GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		806,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Bursting Burn",
				fr: "Brûlure Explosante",
				es: "Quemadura Explosiva",
				it: "Botto Ustionante",
				pt: "Queimadura Explosiva",
				de: "Berstender Brand"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned and Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Mind Blown",
				fr: "Caboche-Kaboum",
				es: "Cabeza Sorpresa",
				it: "Sbalorditesta",
				pt: "Explosão Mental",
				de: "Knallkopf"
			},
			effect: {
				en: "Put any amount of Fire Energy attached to your Pokémon in the Lost Zone. This attack does 50 damage for each card put in the Lost Zone in this way.",
				fr: "Placez autant d’Énergies Fire attachées à vos Pokémon que vous voulez dans la Zone Perdue. Cette attaque inflige 50 dégâts pour chaque carte placée dans la Zone Perdue de cette façon.",
				es: "Pon cualquier cantidad de Energías Fire unidas a tus Pokémon en la Zona Perdida. Este ataque hace 50 puntos de daño por cada carta puesta en la Zona Perdida de esta manera.",
				it: "Prendi tutte le Energie Fire che vuoi assegnate ai tuoi Pokémon e mettile nell’area perduta. Questo attacco infligge 50 danni per ogni carta che hai messo nell’area perduta in questo modo.",
				pt: "Coloque qualquer quantidade de Energia Fire ligada aos seus Pokémon na Zona Perdida. Este ataque causa 50 pontos de dano para cada carta colocada na Zona Perdida desta forma.",
				de: "Lege beliebig viele der an deine Pokémon angelegten Fire-Energien ins Nirgendwo. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise ins Nirgendwo gelegten Karten zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Burst GX",
				fr: "Détonation GX",
				es: "Explosivo GX",
				it: "Fragor-GX",
				pt: "Ruptura Explosiva GX",
				de: "Detonation GX"
			},
			effect: {
				en: "Discard 1 of your Prize cards. If it’s an Energy card, attach it to 1 of your Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez une de vos cartes Récompense. Si c’est une carte Énergie, attachez-la à l’un de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 1 de tus cartas de Premio. Si es una carta de Energía, únela a 1 de tus Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta una delle tue carte Premio. Se è una carta Energia, assegnala a uno dei tuoi Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 1 das suas cartas de Prêmio. Se for uma carta de Energia, ligue-a a 1 dos seus Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 1 deiner Preiskarten auf deinen Ablagestapel. Wenn es eine Energiekarte ist, lege sie an 1 deiner Pokémon an. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 364939
	}
}

export default card

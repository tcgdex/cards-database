import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Incineroar GX",
		fr: "Félinferno GX",
		es: "Incineroar GX",
		it: "Incineroar GX",
		pt: "Incineroar GX",
		de: "Fuegro GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 250,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scar Charge",
				fr: "Recharge Balafre",
				es: "Carga Cicatriz",
				it: "Sfregiocarica",
				pt: "Ofensiva de Cicatriz",
				de: "Narbenaufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 3 damage counters on this Pokémon. If you do, search your deck for up to 3 Darkness Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 3 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez jusqu’à 3 cartes Énergie Darkness dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 3 contadores de daño en este Pokémon. Si lo haces, busca en tu baraja hasta 3 cartas de Energía Darkness y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere tre segnalini danno su questo Pokémon. Se lo fai, cerca nel tuo mazzo fino a tre carte Energia Darkness e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 3 contadores de dano neste Pokémon. Se fizer isto, procure por até 3 cartas de Energia Darkness no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 3 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, durchsuche dein Deck nach bis zu 3 Darkness-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Punch",
				fr: "Poing Dévastateur",
				es: "Puñetazo Devastador",
				it: "Pugno Spaccatutto",
				pt: "Soco Esmagador",
				de: "Schmetterhieb"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkest Tornado GX",
				fr: "Dark Rafale GX",
				es: "Tornado Oscuro GX",
				it: "Tornado Plumbeo GX",
				pt: "Tornado Escuro GX",
				de: "Finstertornado GX"
			},
			effect: {
				en: "This attack does 50 more damage for each damage counter on this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño más por cada contador de daño en este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni in più per ogni segnalino danno presente su questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada contador de dano neste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
		cardmarket: 368073,
		tcgplayer: 183878
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Arceus & Dialga & Palkia GX",
		fr: "Arceus, Dialga et Palkia GX",
		es: "Arceus, Dialga y Palkia GX",
		it: "Arceus, Dialga e Palkia GX",
		pt: "Arceus, Dialga e Palkia GX",
		de: "Arceus & Dialga & Palkia GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 280,

	types: [
		"Dragon",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Ultimate Ray",
				fr: "Rayon Ultime",
				es: "Rayo Definitivo",
				it: "Raggio Finale",
				pt: "Raio Supremo",
				de: "Vollendeter Strahl"
			},
			effect: {
				en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},
			damage: 150,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Altered Creation GX",
				fr: "Création Altérée GX",
				es: "Creación Alterada GX",
				it: "Creazione Alterata GX",
				pt: "Origem Alternativa GX",
				de: "Veränderte Kreation GX"
			},
			effect: {
				en: "For the rest of this game, your Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance). If this Pokémon has at least 1 extra Water Energy attached to it (in addition to this attack’s cost), when your opponent’s Active Pokémon is Knocked Out by damage from those attacks, take 1 more Prize card. (You can’t use more than 1 GX attack in a game.)",
				fr: "Pour le reste de cette partie, les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Si au moins une Énergie Water supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), lorsque le Pokémon Actif de votre adversaire est mis K.O. par les dégâts de ces attaques, récupérez une carte Récompense supplémentaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Durante el resto de la partida, los ataques de tus Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). Si este Pokémon tiene por lo menos 1 Energía Water adicional unida a él (además de las del coste de este ataque), cuando el Pokémon Activo de tu rival quede Fuera de Combate por el daño de esos ataques, coge 1 carta de Premio más. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Per il resto della partita, gli attacchi dei tuoi Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. Se questo Pokémon ha almeno un’Energia Water extra assegnata, in aggiunta a quelle del costo di questo attacco, quando il Pokémon attivo del tuo avversario viene messo KO dai danni di quegli attacchi, prendi una carta Premio in più. Non puoi usare più di un attacco GX a partita.",
				pt: "Pelo resto da partida, os ataques dos seus Pokémon causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). Se este Pokémon tiver pelo menos 1 Energia Water adicional ligada a ele (além do custo deste ataque), quando o Pokémon Ativo do seu oponente for Nocauteado pelo dano daqueles ataques, pegue 1 carta de Prêmio a mais (você não pode usar mais de 1 ataque GX por partida).",
				de: "Für den Rest des Spiels fügen die Attacken deiner Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Wenn an dieses Pokémon mindestens 1 extra Water-Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke) und das Aktive Pokémon deines Gegners durch Schaden jener Attacken kampfunfähig wird, nimm 1 Preiskarte mehr. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 398469
	}
}

export default card

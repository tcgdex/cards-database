import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		es: "Nidoqueen",
		it: "Nidoqueen",
		pt: "Nidoqueen",
		de: "Nidoqueen"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		de: "Nidorina"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double Pied",
				es: "Doble Patada",
				it: "Doppiocalcio",
				pt: "Chute Duplo",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 40 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Fang",
				fr: "Crochet Venin",
				es: "Colmillo Veneno",
				it: "Velenodenti",
				pt: "Presa Venenosa",
				de: "Giftzahn"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l'altro, metti due segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 2 contadores de danos em vez de 1 nesse Pokémon entre as vezes de jogar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Pokémon."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card

import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		es: "Infernape",
		it: "Infernape",
		pt: "Infernape",
		de: "Panferno"
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flaming Fighter",
				fr: "Combattant Incandescent",
				es: "Luchador Fogoso",
				it: "Lottatore Fiammeggiante",
				pt: "Lutador Flamejante",
				de: "Flammenkämpfer"
			},
			effect: {
				en: "Put 6 damage counters instead of 2 on your opponent’s Burned Pokémon between turns.",
				fr: "Placez 6 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
				es: "Pon 6 contadores de daño en vez de 2 en el Pokémon Quemado de tu rival entre turnos.",
				it: "Tra un turno e l’altro, metti sei segnalini danno invece di due sul Pokémon bruciato del tuo avversario.",
				pt: "Coloque 6 contadores de dano ao invés de 2 no Pokémon Queimado do seu oponente entre as vezes de jogar.",
				de: "Lege zwischen den Zügen 6 Schadensmarken anstelle von 2 Schadensmarken auf das verbrannte Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burst Punch",
				fr: "Poing d’Enfer",
				es: "Puño Explosivo",
				it: "Fiammatapugno",
				pt: "Soco Rajada",
				de: "Explosionshieb"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

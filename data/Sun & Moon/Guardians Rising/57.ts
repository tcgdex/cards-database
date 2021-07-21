import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Toxapex-GX",
		fr: "Prédastérie-GX",
		es: "Toxapex-GX",
		it: "Toxapex-GX",
		pt: "Toxapex-GX",
		de: "Aggrostella-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		748,
	],
	hp: 210,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon",
				es: "Clavo Cañón",
				it: "Sparalance",
				pt: "Canhão de Espinhos",
				de: "Dornkanone"
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Super Intense Poison",
				fr: "Poison Super Intense",
				es: "Veneno Superintenso",
				it: "Veleno Ultraintenso",
				pt: "Veneno Superintenso",
				de: "Quälendes Gift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 10 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 10 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 10 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti 10 segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 10 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 10 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Total Shelter GX",
				fr: "Refuge Complet GX",
				es: "Protección Total GX",
				it: "Rifugio Totale-GX",
				pt: "Proteção Total GX",
				de: "Vollschutz GX"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

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

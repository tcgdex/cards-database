import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Toxapex GX",
		'fr-fr': "Prédastérie GX",
		'es-es': "Toxapex GX",
		'it-it': "Toxapex GX",
		'pt-br': "Toxapex GX",
		'de-de': "Aggrostella GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
				'es-es': "Clavo Cañón",
				'it-it': "Sparalance",
				'pt-br': "Canhão de Espinhos",
				'de-de': "Dornkanone"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
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
				'en-us': "Super Intense Poison",
				'fr-fr': "Poison Super Intense",
				'es-es': "Veneno Superintenso",
				'it-it': "Veleno Ultraintenso",
				'pt-br': "Veneno Superintenso",
				'de-de': "Quälendes Gift"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 10 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 10 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 10 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti 10 segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 10 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 10 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Total Shelter GX",
				'fr-fr': "Refuge Complet GX",
				'es-es': "Protección Total GX",
				'it-it': "Rifugio Totale-GX",
				'pt-br': "Proteção Total GX",
				'de-de': "Vollschutz GX"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 297519,
		tcgplayer: 130963
	}
}

export default card

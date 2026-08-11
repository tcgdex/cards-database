import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Dialga GX",
		'fr-fr': "Dialga GX",
		'es-es': "Dialga GX",
		'it-it': "Dialga GX",
		'pt-br': "Dialga GX",
		'de-de': "Dialga GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Overclock",
				'fr-fr': "Overclocker",
				'es-es': "Sobreaceleración",
				'it-it': "Regolazione Eccessiva",
				'pt-br': "Sobrecarregar",
				'de-de': "Übertakten"
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main.",
				'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Pesca fino ad avere sei carte in mano.",
				'pt-br': "Compre cartas até ter 6 cartas na sua mão.",
				'de-de': "Ziehe so lang Karten, bis du 6 Karten auf deiner Hand hast."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
				'es-es': "Hacer Trizas",
				'it-it': "Tritatutto",
				'pt-br': "Triturar",
				'de-de': "Zerfetzer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 80,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Timeless GX",
				'fr-fr': "Intemporel-GX",
				'es-es': "Intemporal GX",
				'it-it': "Sospensione Temporale-GX",
				'pt-br': "Para-tempo GX",
				'de-de': "Zeitlos GX"
			},
			effect: {
				'en-us': "Take another turn after this one. (Skip the between-turns step.) (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Toma otro turno después de este. (Sáltate el paso entre turnos). (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Dopo questo turno, giocane un altro (salta la fase tra i turni). Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Jogue novamente após esta vez de jogar (pule o passo “entre as vezes de jogar”). (Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "Du bist nach diesem Zug erneut am Zug. (Lasse den Schritt zwischen den Zügen aus.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

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
		cardmarket: 316026,
		tcgplayer: 157780
	}
}

export default card

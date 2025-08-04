import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Dialga GX",
		fr: "Dialga GX",
		es: "Dialga GX",
		it: "Dialga GX",
		pt: "Dialga GX",
		de: "Dialga GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Overclock",
				fr: "Overclocker",
				es: "Sobreaceleración",
				it: "Regolazione Eccessiva",
				pt: "Sobrecarregar",
				de: "Übertakten"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main.",
				es: "Roba cartas hasta que tengas 6 cartas en tu mano.",
				it: "Pesca fino ad avere sei carte in mano.",
				pt: "Compre cartas até ter 6 cartas na sua mão.",
				de: "Ziehe so lang Karten, bis du 6 Karten auf deiner Hand hast."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
				es: "Hacer Trizas",
				it: "Tritatutto",
				pt: "Triturar",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
				en: "Timeless GX",
				fr: "Intemporel GX",
				es: "Intemporal GX",
				it: "Sospensione Temporale-GX",
				pt: "Para-tempo GX",
				de: "Zeitlos GX"
			},
			effect: {
				en: "Take another turn after this one. (Skip the between-turns step.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Toma otro turno después de este. (Sáltate el paso entre turnos). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Dopo questo turno, giocane un altro (salta la fase tra i turni). Non puoi usare più di un attacco GX a partita.",
				pt: "Jogue novamente após esta vez de jogar (pule o passo “entre as vezes de jogar”). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Du bist nach diesem Zug erneut am Zug. (Lasse den Schritt zwischen den Zügen aus.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

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
		cardmarket: 355596,
		tcgplayer: 165739
	}
}

export default card

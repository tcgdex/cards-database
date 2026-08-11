import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Xurkitree GX",
		'fr-fr': "Câblifère GX",
		'es-es': "Xurkitree GX",
		'it-it': "Xurkitree GX",
		'pt-br': "Xurkitree GX",
		'de-de': "Voltriant GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		796,
	],

	hp: 180,

	types: [
		"Lightning",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flashing Head",
				'fr-fr': "Tête Clignotante",
				'es-es': "Cabeza Destellante",
				'it-it': "Testa Lampeggiante",
				'pt-br': "Cabeça Piscante",
				'de-de': "Leuchtender Kopf"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon that have any Special Energy attached to them.",
				'fr-fr': "Évitez tous les dégâts d’attaque infligés à ce Pokémon par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario che abbiano delle Energie speciali assegnate.",
				'pt-br': "Previne todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente que tenham alguma Energia Especial ligada a eles.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Rumbling Wires",
				'fr-fr': "Câbles Grondants",
				'es-es': "Cables Ruidosos",
				'it-it': "Cavi Brontoloni",
				'pt-br': "Cabos Estrondosos",
				'de-de': "Rumpelnde Kabel"
			},
			effect: {
				'en-us': "Discard the top card of your opponent’s deck.",
				'fr-fr': "Défaussez la première carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a primeira carta do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lighting GX",
				'fr-fr': "Éclair GX",
				'es-es': "Resplandor GX",
				'it-it': "Lumen GX",
				'pt-br': "Relampejo GX",
				'de-de': "Beleuchten GX"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Votre adversaire dévoile sa main. Ajoutez une des cartes que vous y trouvez à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Tu rival enseña las cartas de su mano. Añade 1 carta que encuentres entre ellas a sus cartas de Premio boca abajo. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Aggiungi una carta presente tra esse alle sue carte Premio a faccia in giù. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Seu oponente revela a própria mão. Adicione 1 carta que encontrar lá às cartas de Prêmio dele(a) viradas para baixo (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Füge 1 Karte, die du dort findest, verdeckt seinen Preiskarten hinzu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,
}

export default card

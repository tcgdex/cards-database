import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Mr. Mime GX",
		'fr-fr': "M. Mime GX",
		'es-es': "Mr. Mime GX",
		'it-it': "Mr. Mime GX",
		'pt-br': "Mr. Mime GX",
		'de-de': "Pantimos GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magic Odds",
				'fr-fr': "Impair Magique",
				'es-es': "Impares Mágicos",
				'it-it': "Dispari Magici",
				'pt-br': "Ímpares Mágicos",
				'de-de': "Ungrade Magie"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by your opponent’s attacks if that damage is exactly 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, or 250.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire si le montant des dégâts est égal à 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 ou 250.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de tu rival si ese daño es exactamente 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 o 250.",
				'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi del tuo avversario se i danni sono esattamente 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 o 250.",
				'pt-br': "Prevenirá todo o dano causado a este Pokémon por ataques do seu oponente, se aquele dano for exatamente 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 ou 250.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird, wenn jener Schaden genau 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 oder 250 Schadenspunkte beträgt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Breakdown",
				'fr-fr': "Réaction",
				'es-es': "Avería",
				'it-it': "Retroazione",
				'pt-br': "Quebra",
				'de-de': "Rückkopplung"
			},
			effect: {
				'en-us': "For each card in your opponent’s hand, put 1 damage counter on their Active Pokémon.",
				'fr-fr': "Pour chaque carte dans la main de votre adversaire, placez un marqueur de dégâts sur son Pokémon Actif.",
				'es-es': "Por cada carta en la mano de tu rival, pon 1 contador de daño en su Pokémon Activo.",
				'it-it': "Per ogni carta nella mano del tuo avversario, metti un segnalino danno sul suo Pokémon attivo.",
				'pt-br': "Para cada carta na mão do seu oponente, coloque 1 contador de dano no Pokémon Ativo dele(a).",
				'de-de': "Lege für jede Karte auf der Hand deines Gegners 1 Schadensmarke auf sein Aktives Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Life Trick GX",
				'fr-fr': "Astuce Vitale GX",
				'es-es': "Truco Vital GX",
				'it-it': "Trucco Vitale GX",
				'pt-br': "Truque Revigorante GX",
				'de-de': "Lebenstrick GX"
			},
			effect: {
				'en-us': "Heal all damage from this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cura todos los puntos de daño a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cura questo Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Cure todo o dano deste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Heile allen Schaden bei diesem Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 368997,
		tcgplayer: 183845
	}
}

export default card

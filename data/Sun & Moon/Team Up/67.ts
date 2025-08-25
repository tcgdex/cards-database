import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Mr. Mime GX",
		fr: "M. Mime GX",
		es: "Mr. Mime GX",
		it: "Mr. Mime GX",
		pt: "Mr. Mime GX",
		de: "Pantimos GX"
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
				en: "Magic Odds",
				fr: "Impair Magique",
				es: "Impares Mágicos",
				it: "Dispari Magici",
				pt: "Ímpares Mágicos",
				de: "Ungrade Magie"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by your opponent’s attacks if that damage is exactly 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, or 250.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire si le montant des dégâts est égal à 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 ou 250.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de tu rival si ese daño es exactamente 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 o 250.",
				it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi del tuo avversario se i danni sono esattamente 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 o 250.",
				pt: "Prevenirá todo o dano causado a este Pokémon por ataques do seu oponente, se aquele dano for exatamente 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 ou 250.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird, wenn jener Schaden genau 10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230 oder 250 Schadenspunkte beträgt."
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
				en: "Breakdown",
				fr: "Réaction",
				es: "Avería",
				it: "Retroazione",
				pt: "Quebra",
				de: "Rückkopplung"
			},
			effect: {
				en: "For each card in your opponent’s hand, put 1 damage counter on their Active Pokémon.",
				fr: "Pour chaque carte dans la main de votre adversaire, placez un marqueur de dégâts sur son Pokémon Actif.",
				es: "Por cada carta en la mano de tu rival, pon 1 contador de daño en su Pokémon Activo.",
				it: "Per ogni carta nella mano del tuo avversario, metti un segnalino danno sul suo Pokémon attivo.",
				pt: "Para cada carta na mão do seu oponente, coloque 1 contador de dano no Pokémon Ativo dele(a).",
				de: "Lege für jede Karte auf der Hand deines Gegners 1 Schadensmarke auf sein Aktives Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Life Trick GX",
				fr: "Astuce Vitale GX",
				es: "Truco Vital GX",
				it: "Trucco Vitale GX",
				pt: "Truque Revigorante GX",
				de: "Lebenstrick GX"
			},
			effect: {
				en: "Heal all damage from this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura questo Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano deste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei diesem Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Dawn Wings Necrozma GX",
		fr: "Necrozma Ailes de l’Aurore GX",
		es: "Necrozma Alas del Alba GX",
		it: "Necrozma Ali dell’Aurora GX",
		pt: "Necrozma Asas Alvorada GX",
		de: "Morgenschwingen-Necrozma GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 180,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Invasion",
				fr: "Invasion",
				es: "Invasión",
				it: "Invasione",
				pt: "Invasão",
				de: "Invasion"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez l’échanger avec votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon tauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Flash",
				fr: "Flash Sombre",
				es: "Destello Oscuro",
				it: "Raggio Oscuro",
				pt: "Flash de Escuridão",
				de: "Dunkler Blitz"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Moon’s Eclipse GX",
				fr: "Éclipse Lunaire-GX",
				es: "Eclipse de Luna GX",
				it: "Eclissi di Luna-GX",
				pt: "Eclipse da Lua GX",
				de: "Lunarfinsternis GX"
			},
			effect: {
				en: "You can use this attack only if you have more Prize cards remaining than your opponent. Prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Vous pouvez utiliser cette attaque seulement s’il vous reste plus de cartes Récompense que votre adversaire. Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Puedes usar este ataque solo si te quedan más cartas de Premio que a tu rival. Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Puoi usare questo attacco solo se hai più carte Premio rimanenti del tuo avversario. Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Você só poderá usar este ataque se tiver mais cartas de Prêmio restantes do que seu oponente. Prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Du kannst diese Attacke nur einsetzen, wenn du mehr verbleibende Preiskarten hast als dein Gegner. Verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card

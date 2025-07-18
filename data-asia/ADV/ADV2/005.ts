import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Illumise",
         ja: "照らされます",
         fr: "Illuminer",
         de: "Beleuchtet",
         es: "Iluminar",
         it: "Illumini",
         pt: "Iluminar",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [314],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Glowing Screen",
            ja: "輝く画面",
            fr: "Écran éclatant",
            de: "Leuchtender Bildschirm",
            es: "Pantalla brillante",
            it: "Schermo luminoso",
            pt: "Tela brilhante",
          },
          effect: {
            en: "As long as Volbeat is in play, any damage done to Illumise by attacks from Fighting PokÃ©mon and Darkness PokÃ©mon is reduced by 30.  You can't reduce more than 30 damage even if there is more than 1 Volbeat in play.",
            ja: "Volbeatが機能している限り、Pokã©MonとDarknessPokã©Monとの戦いによる攻撃によって照らされた損害は30減少します。",
            fr: "Tant que Volbeat est en jeu, tout dommage causé à illumiser par les attaques de la lutte contre les poké et l'obscurité Pokã © Mon est réduit de 30. Vous ne pouvez pas réduire plus de 30 dégâts même s'il y a plus d'un Volbeat en jeu.",
            de: "Solange Volbeat im Spiel ist, wird alle Schäden,",
            es: "Mientras Volbeat esté en juego, cualquier daño hecho para iluminar por los ataques de la lucha contra Poké Mon y la oscuridad Poké Mon se reduce en 30. No se puede reducir más de 30 daños incluso si hay más de 1 volbeat en juego.",
            it: "Finché Volbeat è in gioco, qualsiasi danno arrecato per illuminare dagli attacchi della lotta con Poké e Darkness Poké Mon è ridotto di 30. Non è possibile ridurre più di 30 danni anche se c'è più di 1 Volbeat in gioco.",
            pt: "Enquanto o Volbeat estiver em jogo, qualquer dano causado a iluminar por ataques de combater os Poké e a escuridão Poké é reduzido em 30. Você não pode reduzir mais de 30 danos, mesmo que haja mais de 1 volbeat em jogo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Chaotic Noise",
            ja: "混oticとしたノイズ",
            fr: "Bruit chaotique",
            de: "Chaotisches Lärm",
            es: "Ruido caótico",
            it: "Rumore caotico",
            pt: "Ruído caótico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.  If tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。  尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.  Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.  Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.  Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.  Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.  Se as caudas, o pokemon defensor agora está dormindo.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Pester",
            ja: "ペスター",
            fr: "Harceler",
            de: "Belästigen",
            es: "Molestar",
            it: "Tormentare",
            pt: "Pester",
          },
          effect: {
            en: "If the Defending Pokemon is affected by a Special Condition, this attack does 20 damage plus 20 more damage.",
            ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は20のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense est affecté par une condition spéciale, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon von einem besonderen Zustand betroffen ist, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor se ve afectado por una condición especial, este ataque hace 20 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è influenzato da una condizione speciale, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o pokemon atual for afetado por uma condição especial, esse ataque causará 20 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

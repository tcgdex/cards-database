import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Piloswine",
         ja: "ピロスワイン",
         fr: "Piloswine",
         de: "Piloswine",
         es: "Piloswine",
         it: "Piloswine",
         pt: "Piloswine",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [221],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Freeze",
            ja: "フリーズ",
            fr: "Geler",
            de: "Einfrieren",
            es: "Congelar",
            it: "Congelare",
            pt: "Congelar",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't attack. (Benching or evolving the Defending Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは攻撃できません。 （防御するポケモンのベンチングまたは進化は、この効果を終了します。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer. (Benching ou évolution du Pokémon en défense met fin à cet effet.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann das verteidigende Pokemon nicht angreifen. (Beulen oder Weiterentwicklung des verteidigenden Pokemon beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar. (Banca o evolución del Pokémon defensor termina este efecto).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica non può attaccare. (Panca o evolversi il Pokemon in carica termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon atual não pode atacar. (Bancho ou evolução do Pokémon atual termina esse efeito.)",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Blizzard",
            ja: "ブリザード",
            fr: "Blizzard",
            de: "Schneesturm",
            es: "Ventisca",
            it: "Bufera di neve",
            pt: "Nevasca",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokemon. If tails, this attack does 10 damage to each of your own Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はあなた自身のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. Si Tails, cette attaque fait 10 dégâts à chacun de vos propres pokémon bancés. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, dieser Angriff an jedem Bankpokémon Ihres Gegners Schaden zufügt. Wenn Schwänze, schädigt dieser Angriff 10 an jedem Ihrer eigenen Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. Si Tails, este ataque hace 10 daños a cada uno de sus propios Pokémon en banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. Se le code, questo attacco infligge 10 danni a ciascuno dei tuoi Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon bancos do seu oponente. Se as caudas, esse ataque causam 10 danos a cada um de seus próprios Pokémon com bancada. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};

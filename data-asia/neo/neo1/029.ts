import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Seadra",
         ja: "シードラ",
         fr: "Seadra",
         de: "Seadra",
         es: "Seadra",
         it: "Seadra",
         pt: "Seadra",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [117],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Bubble",
            ja: "バブル",
            fr: "Bulle",
            de: "Blase",
            es: "Burbuja",
            it: "Bolla",
            pt: "Bolha",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Mud Splash",
            ja: "泥のスプラッシュ",
            fr: "Éclaboussure de boue",
            de: "Schlammspritzer",
            es: "Chapoteo de lodo",
            it: "Splash di fango",
            pt: "Respingo de lama",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択してコインをひっくり返します。頭の場合、この攻撃はそのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokemon bancés, choisissez 1 d'entre eux et retournez une pièce. Si les têtes, cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und drehen Sie eine Münze um. Wenn dieser Angriff dieses Pokémon schädigt. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, elija 1 de ellos y voltee una moneda. Si se dirige, este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegline 1 e capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a quel pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e vire uma moeda. Se as cabeças, esse ataque causará 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Omastar",
         ja: "ダークオマスター",
         fr: "Omastar sombre",
         de: "Dunkler Omastar",
         es: "OmaStar oscuro",
         it: "Omastar oscuro",
         pt: "Dark Omarastar",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [139],
      hp: 70,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Prehistoric Water",
            ja: "先史時代の水",
            fr: "Eau préhistorique",
            de: "Prähistorisches Wasser",
            es: "Agua prehistórica",
            it: "Acqua preistorica",
            pt: "Água pré -histórica",
          },
          effect: {
            en: "If your opponent has any evolved Pokemon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokemon and shuffles it into his or her deck.",
            ja: "相手が進化したポケモンをプレイしている場合は、1つを選択してコインをひっくり返します。頭の場合、対戦相手はそのポケモンで最高のステージ進化カードを取り、それを彼または彼女のデッキにシャッフルします。",
            fr: "Si votre adversaire a un pokemon évolué en jeu, choisissez 1 d'entre eux et retournez une pièce. Si la tête, votre adversaire prend la carte d'évolution de la scène la plus élevée sur ce pokemon et le mélange dans son deck.",
            de: "Wenn Ihr Gegner ein entwickeltes Pokémon im Spiel hat, wählen Sie 1 davon und drehen Sie eine Münze. Wenn Sie Köpfe haben, nimmt Ihr Gegner die Evolutionskarte mit der höchsten Bühne auf diesem Pokémon und schlurft sie in sein Deck.",
            es: "Si tu oponente tiene algún Pokémon evolucionado en juego, elige 1 de ellos y voltea una moneda. Si se dirige, tu oponente toma la carta de evolución del escenario más alta en ese Pokémon y la arrastra en su mazo.",
            it: "Se il tuo avversario ha un Pokemon evoluto in gioco, scegline 1 e capovolgi una moneta. Se la testa, il tuo avversario prende la carta di evoluzione del palcoscenico più alta su quel Pokemon e la trascina nel suo mazzo.",
            pt: "Se o seu oponente tiver algum Pokemon evoluído em jogo, escolha 1 deles e vire uma moeda. Se as cabeças, seu oponente pega a carta de evolução mais alta naquele Pokémon e a embaralha em seu deck.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Dark Tentacle",
            ja: "暗い触手",
            fr: "Tentacule sombre",
            de: "Dunkler Tentakel",
            es: "Tentáculo oscuro",
            it: "Tentacolo scuro",
            pt: "Tentáculo escuro",
          },
          effect: {
            en: "During your opponent's next turn, the Defending Pokemon can't evolve except from effects of attacks or Pokemon Powers. (Benching that Pokemon ends this effect.)",
            ja: "対戦相手の次のターン中、防御するポケモンは攻撃やポケモンの力の影響を除いて進化することはできません。 （ポケモンがこの効果を終了することをベンチに入れてください。）",
            fr: "Au cours du prochain virage de votre adversaire, le Pokémon en défense ne peut pas évoluer, sauf à partir des effets des attaques ou des pouvoirs Pokémon. (Banc de ce Pokémon termine cet effet.)",
            de: "Während der nächsten Runde Ihres Gegners kann sich das verteidigende Pokémon nur aus den Auswirkungen von Angriffen oder Pokemon -Kräften entwickeln. (Beuchten Sie, dass Pokemon diesen Effekt beendet.)",
            es: "Durante el próximo turno de tu oponente, el Pokémon defensor no puede evolucionar, excepto los efectos de los ataques o los poderes de Pokémon. (Banca que Pokémon termina este efecto).",
            it: "Durante il prossimo turno del tuo avversario, il Pokemon in carica non può evolversi se non dagli effetti degli attacchi o dei poteri di Pokemon. (Benching quel Pokemon termina questo effetto.)",
            pt: "Durante o próximo turno do seu oponente, o Pokémon atual não pode evoluir, exceto dos efeitos de ataques ou poderes de Pokemon. (Bancando esse Pokémon termina esse efeito.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};

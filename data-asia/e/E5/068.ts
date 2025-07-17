import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Stantler",
         ja: "スタントラー",
         fr: "Stingler",
         de: "Stantler",
         es: "Stantler",
         it: "Stantler",
         pt: "Stantler",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [234],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Threaten",
            ja: "脅かす",
            fr: "Menacer",
            de: "Drohen",
            es: "Amenazar",
            it: "Minacciare",
            pt: "Ameaçar",
          },
          effect: {
            en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
            ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにトレーナーカードを持っている場合は、それらの1つを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Retourner une pièce. Si la tête, regardez la main de votre adversaire. S'il a des cartes d'entraînement là-bas, choisissez 1 d'entre eux. Votre adversaire mélange cette carte dans son deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schauen Sie sich die Hand Ihres Gegners an. Wenn er oder sie dort Trainerkarten hat, wählen Sie 1 davon. Dein Gegner mischt diese Karte in sein Deck.",
            es: "Voltea una moneda. Si se dirige, mira la mano de tu oponente. Si él o ella tiene tarjetas de entrenador allí, elija 1 de ellas. Tu oponente baraja esa carta en su mazo.",
            it: "Capovolgi una moneta. Se testa, guarda la mano del tuo avversario. Se lui o lei ha delle carte dell'allenatore lì, scegli 1 di esse. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, olhe para a mão do seu oponente. Se ele ou ela tiver algum cartões de treinador lá, escolha 1 deles. Seu oponente embaralha essa carta em seu deck.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Antler Swipe",
            ja: "アントラースワイプ",
            fr: "Glissement de bois",
            de: "Geweihe",
            es: "Deslizamiento",
            it: "Swipe di corna",
            pt: "Swipe de chifres",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage to the Defending Pokemon (don't apply Weakness or Resistance). If tails and your opponent has any Benched Pokemon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は防御ポケモンに20のダメージを与えます（脱力や抵抗を適用しないでください）。テールと相手がベンチ付きポケモンを持っている場合、そのうち1つを選択し、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 20 dégâts au Pokémon en défense (n'appliquez pas de faiblesse ou de résistance). Si Tails et votre adversaire ont des Pokémon bancés, choisissez 1 d'entre eux et cette attaque lui fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Köpfe, schädigt dieser Angriff 20 Schäden an dem verteidigenden Pokémon (weder Schwäche noch Widerstand anwenden). Wenn Tails und Ihr Gegner ein Bank -Pokémon haben, wählen Sie 1 davon und dieser Angriff schädigt es 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños al Pokémon defensor (no aplique debilidad o resistencia). Si Tails y tu oponente tienen algún Pokémon de banca, elige 1 de ellos y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 20 danni al Pokemon in difesa (non applicare la debolezza o la resistenza). Se le code e il tuo avversario hanno dei Pokemon in panchina, scegli 1 e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos aos Pokémon defensores (não aplique fraqueza ou resistência). Se as caudas e seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

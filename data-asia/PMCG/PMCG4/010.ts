import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Vileplume",
         ja: "暗いvileplume",
         fr: "Vileplume sombre",
         de: "Dunkler Vileplume",
         es: "Vilepléplema oscuro",
         it: "Vileplume scuro",
         pt: "Vileplume escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 60,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Hay Fever",
            ja: "花粉症",
            fr: "Rhume des foins",
            de: "Heuschnupfen",
            es: "Fiebre del heno",
            it: "Febbre da fieno",
            pt: "Rinite alérgica",
          },
          effect: {
            en: "No Trainer cards can be played. This power stops working while Dark Vileplume is Asleep, Confused, or Paralyzed.",
            ja: "トレーナーカードを再生できません。このパワーは、暗いvileplumeが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Aucune carte d'entraînement ne peut être jouée. Ce pouvoir cesse de fonctionner tandis que le vileplume sombre est endormi, confus ou paralysé.",
            de: "Es können keine Trainerkarten gespielt werden. Diese Kraft hört auf, zu arbeiten, während dunkler Vileplume schläft, verwirrt oder gelähmt ist.",
            es: "No se pueden jugar cartas de entrenador. Este poder deja de funcionar, mientras que Dark Vileplume está dormido, confundido o paralizado.",
            it: "Non è possibile giocare a carte dell'allenatore. Questo potere smette di funzionare mentre il vileplume scuro è addormentato, confuso o paralizzato.",
            pt: "Nenhuma cartas de treinador pode ser tocada. Esse poder para de funcionar enquanto o Dark Vileplume está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Petal Whirlwind",
            ja: "花びらの旋風",
            fr: "Petal Whirlwind",
            de: "Blütenstrecke",
            es: "Torbellino de pétalo",
            it: "Petalo vollo",
            pt: "Petal Whirlwind",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Dark Vileplume is now Confused (after doing damage).",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 2つ以上の頭を手に入れると、ダークビレプルームが混乱しています（ダメージを受けた後）。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes. Si vous obtenez 2 têtes ou plus, le vileplume sombre est maintenant confus (après avoir fait des dégâts).",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe. Wenn Sie 2 oder mehr Köpfe erhalten, ist dunkler Vileplume jetzt verwirrt (nach Schaden).",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas. Si obtienes 2 o más cabezas, Dark Vileplume ahora está confundido (después de hacer daño).",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste. Se ottieni 2 o più teste, Dark Vileplume è ora confuso (dopo aver fatto danni).",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças. Se você receber 2 ou mais cabeças, o Dark Vileplume agora está confuso (depois de causar danos).",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};

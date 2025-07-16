import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Vileplume",
         ja: "vileplume",
         fr: "Vileplume",
         de: "Vileplume",
         es: "Vilpe",
         it: "Vileplume",
         pt: "Vileplume",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [45],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Heal",
            ja: "癒す",
            fr: "Guérir",
            de: "Heilen",
            es: "Sanar",
            it: "Guarire",
            pt: "Curar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, remove 1 damage counter from 1 of your Pokmon. This power can't be used if Vileplume is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、ポクモンの1つから1つのダメージカウンターを取り外します。 vileplumeが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, retirez 1 compteur de dégâts de 1 de votre pokmon. Ce pouvoir ne peut pas être utilisé si le vileplume est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, entfernen Sie 1 Schadenschalter von 1 Ihres Pokmons. Diese Kraft kann nicht verwendet werden, wenn Vileplume schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, retire 1 contador de daño de 1 de su Pokmon. Este poder no se puede usar si Vileplume está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, rimuovi 1 contatore di danni da 1 del tuo Pokmon. Questa potenza non può essere usata se Vileplume è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, remova 1 contador de danos de 1 do seu Pokmon. Esse poder não pode ser usado se o vileplume estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Petal Dance",
            ja: "花びらのダンス",
            fr: "Danse de pétales",
            de: "Blütenstanz",
            es: "Baile de pétalos",
            it: "Danza del petalo",
            pt: "Dança de pétala",
          },
          effect: {
            en: "Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused (after doing damage).",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。 vileplumeは現在混乱しています（ダメージを受けた後）。",
            fr: "Flip 3 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes. Vileplume est maintenant confus (après avoir fait des dégâts).",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe. Vileplume ist jetzt verwirrt (nach Schaden).",
            es: "Flip 3 monedas. Este ataque hace 40 veces el número de cabezas. Vileplume ahora está confundido (después de hacer daño).",
            it: "Flip 3 monete. Questo attacco fa 40 danni il numero di teste. Vileplume è ora confuso (dopo aver fatto danni).",
            pt: "Flip 3 moedas. Este ataque causa 40 danos vezes o número de cabeças. O vileplume agora está confuso (depois de causar danos).",
          },
          damage: None,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
